describe('Authentication Flows', () => {
  const testUser = {
    username: 'cypressuser',
    email: 'cypress@test.com',
    password: 'Password123!'
  };

  before(() => {
    cy.task('db:reset');
    cy.visit('/');
  });

  it('should register new user', () => {
    cy.get('[data-test=register-link]').click();
    cy.get('[data-test=username]').type(testUser.username);
    cy.get('[data-test=email]').type(testUser.email);
    cy.get('[data-test=password]').type(testUser.password);
    cy.get('[data-test=register-btn]').click();
    
    cy.url().should('include', '/dashboard');
    cy.contains(`Welcome ${testUser.username}`).should('exist');
  });

  it('should login existing user', () => {
    cy.get('[data-test=logout-btn]').click();
    cy.get('[data-test=login-link]').click();
    cy.get('[data-test=email]').type(testUser.email);
    cy.get('[data-test=password]').type(testUser.password);
    cy.get('[data-test=login-btn]').click();
    
    cy.url().should('include', '/dashboard');
  });

  it('should show error for invalid login', () => {
    cy.get('[data-test=logout-btn]').click();
    cy.get('[data-test=login-link]').click();
    cy.get('[data-test=email]').type('wrong@email.com');
    cy.get('[data-test=password]').type('wrongpass');
    cy.get('[data-test=login-btn]').click();
    
    cy.contains('Invalid credentials').should('exist');
  });
});
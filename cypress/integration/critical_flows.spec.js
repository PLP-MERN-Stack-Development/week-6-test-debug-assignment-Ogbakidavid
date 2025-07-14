describe('Critical User Flows', () => {
  it('should complete auth flow', () => {
    cy.visit('/');
    cy.registerUser('testuser', 'test@example.com', 'password123');
    cy.logout();
    cy.loginUser('test@example.com', 'password123');
  });

  it('should handle post creation', () => {
    cy.loginUser('test@example.com', 'password123');
    cy.createPost('Test Post', 'This is a test post');
    cy.contains('Test Post').should('exist');
    cy.deletePost('Test Post');
  });
});
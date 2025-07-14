const { generateToken, verifyToken } = require('../../src/utils/auth');
const jwt = require('jsonwebtoken');

describe('Auth Utilities', () => {
  const mockUser = { id: '123', email: 'test@example.com' };
  let token;

  beforeAll(() => {
    process.env.JWT_SECRET = 'testsecret';
  });

  it('should generate valid JWT token', () => {
    token = generateToken(mockUser);
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.id).toBe(mockUser.id);
  });

  it('should verify valid token', () => {
    const payload = verifyToken(token);
    expect(payload.id).toBe(mockUser.id);
  });

  it('should throw error for invalid token', () => {
    expect(() => verifyToken('invalid.token.here')).toThrow();
  });
});
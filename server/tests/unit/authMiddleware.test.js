const { authenticate } = require('../../src/middleware/auth');
const { generateToken } = require('../../src/utils/auth');

describe('Auth Middleware', () => {
  const mockRequest = (token) => ({
    headers: { authorization: token && `Bearer ${token}` }
  });
  
  const mockResponse = () => ({
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  });

  it('should allow access with valid token', () => {
    const token = generateToken({ id: '123' });
    const req = mockRequest(token);
    const res = mockResponse();
    const next = jest.fn();
    
    authenticate(req, res, next);
    
    expect(next).toHaveBeenCalled();
    expect(req.user.id).toBe('123'); // Changed from req.userId to req.user.id
  });
});
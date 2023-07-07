import { selectElFromDom } from '../module/DomUtilities.js';
import { addLike } from '../module/apis.js';
import likeCount from '../module/likeCounter.js';

jest.mock('../module/DomUtilities.js');
jest.mock('../module/apis.js');

describe('likeCount', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should decrease like count and update DOM when love button is already Liked by use for one session', async () => {
    const mockLikeSpanCounter = {
      innerHTML: '3',
      textContent: '3',
    };
    const mockLoveBtn = {
      classList: {
        contains: jest.fn().mockReturnValue(true),
        replace: jest.fn(),
      },
    };
    selectElFromDom.mockReturnValueOnce(mockLikeSpanCounter).mockReturnValueOnce(mockLoveBtn);

    await likeCount(null, '123');

    expect(selectElFromDom).toHaveBeenCalledWith('.like-counter123');
    expect(selectElFromDom).toHaveBeenCalledWith('#love123');
    expect(mockLoveBtn.classList.contains).toHaveBeenCalledWith('fa-solid');
    expect(mockLoveBtn.classList.replace).toHaveBeenCalledWith('fa-solid', 'fa-regular');
    expect(mockLikeSpanCounter.innerHTML).toBe('2');
  });

  test('should Post new like and increase like count when user has not like before', async () => {
    const mockLikeSpanCounter = {
      innerHTML: '3',
      textContent: '3',
    };
    const mockLoveBtn = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        replace: jest.fn(),
        add: jest.fn(),
      },
    };
    selectElFromDom.mockReturnValueOnce(mockLikeSpanCounter).mockReturnValueOnce(mockLoveBtn);
    addLike.mockResolvedValueOnce(true);

    await likeCount(null, '123');

    expect(selectElFromDom).toHaveBeenCalledWith('.like-counter123');
    expect(selectElFromDom).toHaveBeenCalledWith('#love123');
    expect(mockLoveBtn.classList.contains).toHaveBeenCalledWith('fa-solid');
    expect(addLike).toHaveBeenCalledWith(123);
    expect(mockLoveBtn.classList.replace).toHaveBeenCalledWith('fa-regular', 'fa-solid');
    expect(mockLoveBtn.classList.add).toHaveBeenCalledWith('like-before');
    expect(mockLikeSpanCounter.innerHTML).toBe('4');
  });

  test('should increase like count when love button has class like-before but should not POST', async () => {
    const mockLikeSpanCounter = {
      innerHTML: '3',
      textContent: '3',
    };
    const mockLoveBtn = {
      classList: {
        contains: jest.fn().mockReturnValue(false),
        replace: jest.fn(),
      },
    };
    selectElFromDom.mockReturnValueOnce(mockLikeSpanCounter).mockReturnValueOnce(mockLoveBtn);

    await likeCount(null, '123');

    expect(selectElFromDom).toHaveBeenCalledWith('.like-counter123');
    expect(selectElFromDom).toHaveBeenCalledWith('#love123');
    expect(mockLoveBtn.classList.contains).toHaveBeenCalledWith('fa-solid');
    expect(mockLoveBtn.classList.replace).toHaveBeenCalledWith('fa-regular', 'fa-solid');
    expect(mockLikeSpanCounter.innerHTML).toBe('4');
  });
});
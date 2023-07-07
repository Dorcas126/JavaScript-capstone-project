import commentCounter from '../module/commentCounter.js';
import { selectElFromDom } from '../module/DomUtilities.js';
import { getLength } from '../module/utilities.js';

jest.mock('../module/DomUtilities.js');
jest.mock('../module/utilities.js');

describe('commentCounter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should update comment counter with length when comments are provided', async () => {
    const mockCommentCounterElement = {
      innerHTML: '',
    };
    selectElFromDom.mockReturnValue(mockCommentCounterElement);
    getLength.mockReturnValue(3);

    const comments = [1, 2, 3];

    await commentCounter(comments);

    expect(selectElFromDom).toHaveBeenCalledWith('.comment-count');
    expect(mockCommentCounterElement.innerHTML).toBe('(3)');
  });

  test('should update comment counter with 0 when comments have an error', async () => {
    const mockCommentCounterElement = {
      innerHTML: '',
    };
    selectElFromDom.mockReturnValue(mockCommentCounterElement);
    getLength.mockReturnValue(0);

    const comments = { error: 'Some error' };

    await commentCounter(comments);

    expect(selectElFromDom).toHaveBeenCalledWith('.comment-count');
    expect(mockCommentCounterElement.innerHTML).toBe('(0)');
  });

  test('should update comment counter with 0 when comments are not provided', async () => {
    const mockCommentCounterElement = {
      innerHTML: '',
    };
    selectElFromDom.mockReturnValue(mockCommentCounterElement);
    getLength.mockReturnValue(0);

    await commentCounter();

    expect(selectElFromDom).toHaveBeenCalledWith('.comment-count');
    expect(mockCommentCounterElement.innerHTML).toBe('(0)');
  });

  test('should select element with .comment-count class', async () => {
    const mockCommentCounterElement = {
      innerHTML: '',
    };
    selectElFromDom.mockReturnValue(mockCommentCounterElement);

    await commentCounter();

    expect(selectElFromDom).toHaveBeenCalledWith('.comment-count');
  });

  test('should return 0 if comments is not an array', async () => {
    const mockCommentCounterElement = {
      innerHTML: '',
    };
    selectElFromDom.mockReturnValue(mockCommentCounterElement);
    getLength.mockReturnValue(0);

    await commentCounter(null);

    expect(getLength).toHaveBeenCalledWith(null);
    expect(mockCommentCounterElement.innerHTML).toBe('(0)');
  });
});
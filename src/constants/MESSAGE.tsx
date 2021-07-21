export const MESSAGE = {
  SAVE_SUCCESS: '저장하였습니다.',
  DELETE_SUCCESS: '삭제하였습니다.',

  SAVE_FAIL: '저장 도중 에러가 발생하였습니다.',
  DELETE_FAIL: '삭제 도중 에러가 발생하였습니다.',
  LOAD_FAIL: '조회 도중 에러가 발생하였습니다.',

  GET_ERROR_MSG_FORMAT: (errorMessage:any) => {
    return `\n ERROR => [${errorMessage}]`;
  }
}
export async function readJsonResponse(response) {
  const text = await response.text();

  if (!text) {
    return {
      result: 'fail',
      resMsg: response.ok ? '서버 응답이 비어 있습니다.' : `서버 오류가 발생했습니다. (${response.status})`
    };
  }

  try {
    return JSON.parse(text);
  } catch {
    return {
      result: 'fail',
      resMsg: response.ok ? '서버 응답을 해석하지 못했습니다.' : `서버 오류가 발생했습니다. (${response.status})`,
      raw: text.slice(0, 500)
    };
  }
}

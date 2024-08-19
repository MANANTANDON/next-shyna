import helperAPI from "./index";

const GetDataBySlug = async (slug) => {
  try {
    const url = `/api/live/post/${slug}`;
    const res = await helperAPI.getRequest(url);
    return res;
  } catch (err) {
    return false;
  }
};

const SearchPost = async (body, size) => {
  try {
    const url = "/api/live/post?" + new URLSearchParams(size);
    const response = await helperAPI.postRequest(url, body);

    return response;
  } catch (err) {
    return false;
  }
};

export { GetDataBySlug, SearchPost };

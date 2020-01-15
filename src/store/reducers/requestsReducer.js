const INITIAL_STATE = {}

export default (state = INITIAL_STATE, { type, requestData, responseData }) => {
  switch (type) {
    case 'FETCH_DATA':
      const { url, key, method, body, dispatch } = requestData

      const fetchData = async () => {
        const response = await fetch(url, { method, body })
        const result = await response.json()
        dispatch({
          type: 'SET_DATA',
          responseData: { result, responseKey: key },
        })
      }
      fetchData()

      return {
        ...state,
        [key]: ['pending'],
      }
    case 'SET_DATA':
      const { result, responseKey } = responseData
      return {
        ...state,
        [responseKey]: result,
      }
    default:
      return state
  }
}

const apiUrl = 'https://opentdb.com/api.php?amount=10&type=boolean'

export const fetchQuizFromAPI = (): Promise<any> => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((questions) => questions.results)
    .catch((err) => Promise.reject(err))
}

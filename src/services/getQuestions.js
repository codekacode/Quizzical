const getQuestions = () => {
  let apiURL = `https://opentdb.com/api.php?amount=5`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(data => data.results)
}

export default getQuestions;
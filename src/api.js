export async function getCategories() {
  const url =
    "https://allsportsapi2.p.rapidapi.com/api/esport/tournament/categories"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response
    return result
  } catch (error) {
    return error
  }
}

export async function getLive() {
  const url = "https://allsportsapi2.p.rapidapi.com/api/esport/matches/live"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response
    return result
  } catch (error) {
    return error
  }
}

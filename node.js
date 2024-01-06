const accessKey = 'a033211013e38ab10ecd26e1304eaa9d'
const apiUrl = 'http://apilayer.net/api/validate'

const phoneNumbers = ['8527960114', '999999999'] // Add your phone numbers here

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const validatePhoneNumbers = async () => {
  const results = []

  for (const phoneNumber of phoneNumbers) {
    const url = `${apiUrl}?access_key=${accessKey}&number=${phoneNumber}&country_code=IN&format=1`

    try {
      await delay(2000) // Introduce a delay of 2 seconds

      const response = await fetch(url)

      const data = await response.json()

      console.log(data)

      const resultObject = {
        number: phoneNumber,
        valid: data.valid
      }

      results.push(resultObject)
    } catch (error) {
      console.error(
        `Error validating phone number ${phoneNumber}:`,
        error.message
      )
      // Continue to the next iteration even if validation fails
      continue
    }
  }

  return results
}

// Usage
validatePhoneNumbers().then((results) => {
  console.log(results)
})

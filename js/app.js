const form = document.getElementById('myForm')

const apiKey = 'your_sheet_best_api_key'

const registration = document.getElementById('registration')
const success = document.getElementById('success')

form.addEventListener('submit', async(event) => {
  // This function reacts to the Submit event of the form and sends its data to the db

  event.preventDefault()

  // we make the request to the api (Sheet Best) to save the data in db (Google Sheets)
  try {
    const response = await fetch(apiKey, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Name": form.name.value,
        "Email": form.email.value,
        "Phone": form.phone.value,
      })
    })
  
    const responseContent = await response.json()
    console.log(responseContent)
  } catch (error) {
    console.log(error)
  }



  // ###########################################################################
  // Get the data from the db
  /* try {
    const response = await fetch(apiKey)
  
    const responseContent = await response.json()
    console.log(responseContent)
  } catch (error) {
    console.log(error)
  } */



  // ###########################################################################
  // Delete a row from the db
  /* try {
    const response = await fetch(`${apiKey}/0`, {
      method: 'DELETE',
    })
  
    const responseContent = await response.json()
    console.log(responseContent)
  } catch (error) {
    console.log(error)
  } */



  // ###########################################################################
  // Update a row
  /* try {
    const response = await fetch(`${apiKey}/0`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Phone": "000 000 0000",
      })
    })
  
    const responseContent = await response.json()
    console.log(responseContent)
  } catch (error) {
    console.log(error)
  } */

  registration.classList.remove('active')
  success.classList.add('active')
})
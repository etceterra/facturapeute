export async function sendInvoice(invoiceContentBase64) {
  const response = await fetch(`${process.env.API_URL}/email/${invoiceContentBase64}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Origin: process.env.APP_URL
    }
  })

  if (!response.ok) {
    const body = await response.text()

    throw Error(body)
  }
}

export function generateInvoiceContentBase64(
  naturapeuteID,
  author,
  therapist,
  patient,
  servicePrice,
  services,
  invoiceTimestamp
) {
  const APIServices = services.map(e => ({ ...e }))

  APIServices.forEach(service => {
    delete service.color
    delete service.id
    service.date = Date.now()
  })

  const invoiceContent = {
    author,
    therapist,
    patient: { ...patient },
    servicePrice,
    services: APIServices,
    timestamp: invoiceTimestamp
  }

  if (naturapeuteID)
    invoiceContent.naturapeuteID = naturapeuteID

  delete invoiceContent.patient.id

  return btoa(JSON.stringify(invoiceContent))
}

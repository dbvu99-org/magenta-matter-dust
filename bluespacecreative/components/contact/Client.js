import { Button, Grid, Input, Text, Textarea } from "@nextui-org/react"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"

function ClientForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const send = (e) => {
    e.preventDefault()
    setSubmitting(true)

    const { iAm, name, company, phoneNumber, email, connectingEmployee, projectTaskDesc, dueDate, notes } = e.target

    emailjs.init("0J7Zp8Fh5mKG3Vx71")

    emailjs
      .send("service_rhf8df6", "template_38xcieh", {
        iAm: "I am an existing CLIENT who is in need of some help.",
        name: "Name: " + name.value,
        company: "Company: " + company.value,
        phoneNumber: "Phone Number: " + phoneNumber.value,
        email: email.value,
        connectingEmployee: "bluespace employee, you wish to connect with? " + connectingEmployee.value,
        projectTaskDesc: "Project / Task Description: " + projectTaskDesc.value,
        dueDate: "Due Date: " + dueDate.value,
        notes: "Notes: " + notes.value,
      })
      .then((data) => {
        console.log(data)
        setSubmitting(false)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        alert(err.text)
        setSubmitting(false)
      })
  }

  return (
    <form id="brandForm" onSubmit={send}>
      {submitted ? (
        <Text>Thank you for your submission!</Text>
      ) : (
        <Grid.Container
          gap={4}
          css={{
            px: 0,
          }}
        >
          <Grid xs={12} md={10}>
            <Input hidden name="iAm" id="iAm" value="I am a BRAND wishing to conjure up some magic in the marketplace" />
            <Input required fullWidth underlined name="name" id="name" labelPlaceholder="NAME*" />
          </Grid>
          <Grid xs={12} sm={6} md={5}>
            <Input fullWidth underlined name="company" id="company" labelPlaceholder="COMPANY" />
          </Grid>
          <Grid xs={12} sm={6} md={5}>
            <Input fullWidth underlined name="phoneNumber" id="phoneNumber" labelPlaceholder="PHONE" />
          </Grid>
          <Grid xs={12} md={10}>
            <Input required fullWidth underlined name="email" id="email" labelPlaceholder="EMAIL*" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} underlined name="connectingEmployee" id="connectingEmployee" labelPlaceholder="BLUESPACE EMPLOYEE, YOU WISH TO CONNECT WITH?" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} underlined name="projectTaskDesc" id="projectTaskDesc" type={"text"} labelPlaceholder="PROJECT / TASK DESCRIPTION" />
          </Grid>
          {/* <Grid xs={12} md={10}>
            <Input css={{ w: "100%" }} underlined name="connectingEmployee" id="connectingEmployee" label="BLUESPACE EMPLOYEE, YOU WISH TO CONNECT WITH?" />
          </Grid> */}
          <Grid xs={12} md={10}>
            <Input css={{ w: "100%" }} name="dueDate" id="dueDate" underlined labelPlaceholder="DUE DATE" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} underlined name="notes" id="notes" type={"text"} labelPlaceholder="NOTES" />
          </Grid>
          <Grid xs={12} md={10}>
            <Button
              css={{
                w: "100%",
                bg: "rgb(0, 173, 238)",
                br: 5,
                tt: "uppercase",
              }}
              type="submit"
              disabled={submitting}
            >
              Send
            </Button>
          </Grid>
        </Grid.Container>
      )}
    </form>
  )
}

export default ClientForm

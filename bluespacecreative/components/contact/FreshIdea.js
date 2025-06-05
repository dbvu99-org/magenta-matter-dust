import { Button, Grid, Input, Text, Textarea } from "@nextui-org/react"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"

function FreshIdea() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const send = (e) => {
    e.preventDefault()
    const { iAm, name, company, phoneNumber, email, help, hearFrom, interestedPostition, projectTaskDesc, dueDate, notes } = e.target

    emailjs.init("0J7Zp8Fh5mKG3Vx71")

    emailjs
      .send("service_rhf8df6", "template_38xcieh", {
        iAm: "I am a fresh IDEA who’s looking to be born into reality",
        name: "Name: " + name.value,
        phoneNumber: "Phone Number: " + phoneNumber.value,
        email: email.value,
        // notes: "Notes: " + notes.value,
        help: "How can we help? " + help.value,
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
    <form onSubmit={send}>
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
            <Textarea css={{ w: "100%" }} name="help" id="help" underlined type={"text"} labelPlaceholder="HOW CAN WE HELP?" />
          </Grid>
          <Grid xs={12} md={10}>
            <Button
              css={{
                w: "100%",
                bg: "rgb(0, 173, 238)",
                br: 5,
                tt: "uppercase",
              }}
              disabled={submitting || submitted}
              type="submit"
            >
              Send
            </Button>
          </Grid>
        </Grid.Container>
      )}
    </form>
  )
}

export default FreshIdea

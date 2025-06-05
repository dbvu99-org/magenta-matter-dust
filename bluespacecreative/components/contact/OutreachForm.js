import { Button, Grid, Input, Text, Textarea } from "@nextui-org/react"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { StyledDiv } from "../Share"

function OutreachForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const send = (e) => {
    e.preventDefault()
    const { iAm, name, company, phoneNumber, email, yearGraduation, help, hearFrom, interestedPostition, projectTaskDesc, dueDate, notes } = e.target

    emailjs.init("0J7Zp8Fh5mKG3Vx71")

    emailjs
      .send("service_rhf8df6", "template_38xcieh", {
        iAm: "Agency Networking and Studio Tour",
        name: "Name: " + name.value,
        company: "Year of Graduation: " + yearGraduation,
        email: email.value,
        help: "Creative interest(s) " + help.value,
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
        <>
          <Text size={24} css={{ letterSpacing: 0.5, lineHeight: 1.25 }}>
            Thank you for RSVPing to our networking event!
          </Text>
          <Text size={24} css={{ letterSpacing: 0.5, lineHeight: 1.25 }}>
            We look forward to seeing you in our studio at 1205 Broadway on January 8 from 4-5:30.
          </Text>
          <StyledDiv
            css={{
              mt: "2rem",
              "& > img": {
                display: "block",
                maxW: 350,
                mx: "auto",
                "@sm": {
                  mx: "auto",
                },
              },
            }}
          >
            <img src="/images/bluespacecreative_Logo.svg" alt="bluespace creative" />
          </StyledDiv>
        </>
      ) : (
        <Grid.Container
          gap={4}
          css={{
            px: 0,
            margin: "auto",
          }}
        >
          <Grid xs={12} md={10}>
            <Text size={27} css={{ letterSpacing: 0.1, lineHeight: 1 }}>
              {/* This is a rare opportunity to learn about a big-time agency in a small town, so RSVP now! */}
              Attendance is limited to the first 25 people who RSVP by{" "}
              <strong>
                January 2<sup>nd</sup>
              </strong>
              .
            </Text>
          </Grid>
          <Grid xs={12} md={10}>
            <Input required fullWidth underlined name="name" id="name" labelPlaceholder="Name" />
          </Grid>
          <Grid xs={12} md={10}>
            <Input required fullWidth underlined name="email" id="email" labelPlaceholder="Email" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} name="help" id="help" underlined type={"text"} labelPlaceholder="Creative Interest(s)" />
          </Grid>
          <Grid xs={12} sm={10}>
            <Input fullWidth underlined name="company" id="company" labelPlaceholder="Expected year of graduation" />
          </Grid>
          <Grid xs={12} md={10}>
            <Button
              css={{
                w: "100%",
                bg: "rgb(0, 173, 238)",
                br: 5,
                tt: "uppercase",
                fs: 20,
                fontWeight: "$semibold",
              }}
              disabled={submitting || submitted}
              type="submit"
            >
              SAVE MY SPOT
            </Button>
          </Grid>
        </Grid.Container>
      )}
    </form>
  )
}

export default OutreachForm

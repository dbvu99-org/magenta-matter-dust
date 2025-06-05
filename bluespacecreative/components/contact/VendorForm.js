import { Button, Dropdown, Grid, Input, Text, Textarea } from "@nextui-org/react"
import React, { useMemo, useState } from "react"
import emailjs from "@emailjs/browser"

function VendorForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [selected, setSelected] = useState(null)
  // const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected])

  const send = (e) => {
    e.preventDefault()
    // setSubmitting(true)

    const { iAm, name, company, phoneNumber, email, hearFrom, interestedPostition, projectTaskDesc, dueDate, notes, reachFor, reachForDepartment } = e.target

    emailjs.init("0J7Zp8Fh5mKG3Vx71")

    emailjs
      .send("service_rhf8df6", "template_38xcieh", {
        iAm: "I am a VENDOR/SUPPLIER who has something unique to offer",
        name: "Name: " + name.value,
        phoneNumber: "Phone Number: " + phoneNumber.value,
        email: email.value,
        hearFrom: "Where did you first hear about bluespace? " + hearFrom.value,
        reachFor: "Is there a specific person you are trying to reach? " + reachFor.value,
        reachForDepartment: "Is there a specific department you are trying to reach? " + selected?.currentKey,
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
          {/* <Grid xs={12} sm={6} md={5}>
            <Input fullWidth underlined name="company" id="company" labelPlaceholder="COMPANY" />
          </Grid> */}
          <Grid xs={12} sm={6} md={5}>
            <Input fullWidth underlined name="phoneNumber" id="phoneNumber" labelPlaceholder="PHONE" />
          </Grid>
          <Grid xs={12} sm={6} md={5}>
            <Input required fullWidth underlined name="email" id="email" labelPlaceholder="EMAIL*" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} underlined name="hearFrom" id="hearFrom" type={"text"} labelPlaceholder="WHERE DID YOU FIRST HEAR ABOUT BLUESPACE?" />
          </Grid>
          <Grid xs={12} md={10}>
            <Textarea css={{ w: "100%" }} underlined name="reachFor" id="reachFor" type={"text"} labelPlaceholder="IS THERE A SPECIFIC PERSON YOU ARE TRYING TO REACH?" />
          </Grid>
          <Grid xs={12} md={10}>
            {/* <Textarea css={{ w: "100%" }} underlined name="interestedPostition" id="interestedPostition" type={"text"} label="WHERE DID YOU FIRST 
            HEAR ABOUT BLUESPACE?" /> */}
            <div>
              {/* {JSON.stringify(selected)} */}
              <Text transform="uppercase" css={{ color: "#889096", fs: 14, letterSpacing: "$normal" }}>
                Is there a specific department you are trying to reach?
              </Text>

              <Dropdown>
                <Dropdown.Button
                  flat
                  color="text"
                  css={{
                    br: 5,
                    // tt: "capitalize"
                  }}
                >
                  {selected?.currentKey || "Select a department"}
                </Dropdown.Button>
                <Dropdown.Menu
                  css={{
                    $$dropdownMenuWidth: "280px",
                  }}
                  aria-label="Single selection actions"
                  color="primary"
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                  disallowEmptySelection
                >
                  <Dropdown.Item key="Creative Department">Creative Department</Dropdown.Item>
                  <Dropdown.Item key="Print Fulfillment">Print Fulfillment</Dropdown.Item>
                  <Dropdown.Item key="Signage / Production">Signage / Production</Dropdown.Item>
                  <Dropdown.Item key="Web Department">Web Department</Dropdown.Item>
                  <Dropdown.Item key="Advertising">Advertising</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
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

export default VendorForm

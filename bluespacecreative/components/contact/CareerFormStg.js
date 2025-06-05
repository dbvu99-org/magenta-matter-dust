import { Button, Dropdown, Grid, Input, Text, Textarea } from "@nextui-org/react"
import React, { useEffect, useMemo, useState } from "react"
import emailjs from "@emailjs/browser"
import { client } from "../../utils/sanity"

function CareerFormStg() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [selected, setSelected] = useState(null)
  const selectedValue = useMemo(() => selected && Array.from(selected).join(", ").replaceAll("_", " "), [selected])

  const send = (e) => {
    e.preventDefault()
    // setSubmitting(true)

    const { iAm, name, company, phoneNumber, email, hearFrom, interestedPostition, projectTaskDesc, dueDate, notes } = e.target

    emailjs.init("0J7Zp8Fh5mKG3Vx71")

    emailjs
      .send("service_rhf8df6", "template_38xcieh", {
        iAm: "I am a CREATIVE ROCKSTAR wanting to audition for the bluespace band.",
        name: "Name: " + name.value,
        // company: "Company: " + company.value,
        phoneNumber: "Phone Number: " + phoneNumber.value,
        email: email.value,
        hearFrom: "Where did you first hear about bluespace? " + hearFrom.value,
        interestedPostition: "What position(s) are you interested in applying for? " + selectedValue,
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

  const [positions, setPositions] = useState([])

  useEffect(() => {
    console.log("selected", selected)

    client.fetch('*[_type == "positionCategory"]{title,"slug":slug.current,positions[] -> {title,"slug":slug.current}}').then((data) => {
      console.log("data", data)
      setPositions(data)
    })
  }, [])

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

          {/* <Textarea
            css={{ w: "100%" }}
            underlined
            name="interestedPostition"
            id="interestedPostition"
            type={"text"}
            label="WHERE DID YOU FIRST 
            HEAR ABOUT BLUESPACE?"
          /> */}
          <Grid xs={12} md={10}>
            <div>
              <Text
                transform="uppercase"
                css={{
                  color: "#889096",
                  fs: 14,
                }}
              >
                What position(s) are you interested in applying for?
              </Text>

              {/* {JSON.stringify(positions)} */}

              <Dropdown>
                <Dropdown.Button
                  flat
                  color="text"
                  css={{
                    br: 5,
                  }}
                >
                  {selected ? selectedValue : "Select one or more positions"}
                </Dropdown.Button>

                <Dropdown.Menu
                  css={{
                    $$dropdownMenuWidth: "280px",
                  }}
                  aria-label="Single selection actions"
                  color="primary"
                  // selectionMode="single"
                  selectionMode="multiple"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                  disallowEmptySelection
                >
                  {positions.map((positionCategory) => (
                    <Dropdown.Section title={positionCategory.title} key={positionCategory.slug}>
                      {positionCategory.positions.map((position) => (
                        <Dropdown.Item key={position.title}>{position.title}</Dropdown.Item>
                      ))}
                    </Dropdown.Section>
                  ))}
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

export default CareerFormStg

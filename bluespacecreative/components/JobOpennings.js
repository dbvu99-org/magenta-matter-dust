import Link from "next/link";
import { Text } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getJobs } from "../utils/sanity";
// import { useParallax } from "react-scroll-parallax";

function JobOpennings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const header = useParallax({ speed: -5 });

  useEffect(() => {
    setLoading(true);
    getJobs()
      .then((jobs) => {
        setJobs(jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Text h2 css={{ mb: "1rem" }}>
        We&apos;re looking for
      </Text>
      {loading && <Loading></Loading>}
      {!loading && (
        // <Fade left cascade>
        <Row wrap="wrap">
          {jobs.map(({ _id, title, excerpt, slug }, index) => (
            <Link href={`/careers/${slug}`} passHref>
              <Card
                as="a"
                key={_id}
                hoverable
                clickable
                css={{
                  //
                  // boxShadow: "0 0 21px -5px #00000026",
                  bs: "none",
                  border: "1px solid #00000026",
                  maxWidth: 500,
                  marginBottom: "2em",
                  "&:hover": {
                    boxShadow: "0 0 21px -5px #00000026",
                  },
                }}
              >
                <Text h3 css={{ ta: "center", py: "1em" }}>
                  {title}
                </Text>
                <Text size={20} css={{ mb: "1em" }}>
                  {excerpt}
                </Text>
                {/* <Link
                css={{
                  fs: 20,
                  ta: "right",
                  d: "block",
                }}
                href={`/careers/${slug}`}
              >
                Find out more
              </Link> */}
              </Card>
            </Link>
          ))}
        </Row>
        // </Fade>
      )}
    </Wrapper>
  );
}

export default JobOpennings;

const Wrapper = styled("section", {
  "@md": {
    px: "3em",
    mb: "1em",
  },
});

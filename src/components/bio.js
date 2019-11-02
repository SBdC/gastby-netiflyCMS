/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { scale, rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/hyper-gris.jpg/" }) {
        childImageSharp {
          fixed(width: 250, height: 83) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection:`column`,

        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          // marginRight: rhythm(1 ),
          marginTop: rhythm(0.5),
          marginBottom: rhythm(1),
          // minWidth: 50,
          // borderRadius: `100%`,
        }}
        // imgStyle={{
        //   borderRadius: `50%`,
        // }}
      />
      <p
       style={{
          // marginRight: rhythm(1 ),
          marginTop: rhythm(0.5),
          marginBottom: rhythm(1),
           ...scale(-1 / 5)
          // minWidth: 50,
          // borderRadius: `100%`,
        }}
      >
        Written by <strong>{author}</strong> who live and think around the world.
        {` `}

      </p>
    </div>
  )
}

export default Bio

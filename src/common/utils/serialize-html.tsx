import { ContentBlock } from '@/common/types'
import { Chip, Emoji, Link, LinkProps } from '@/components'
import {
  ResumeItem,
  ResumeItemHeading,
  ResumeItemHeadingProps,
  ResumeItemContent,
} from '@/features'

const mapContentOrChildren = ({
  content,
  children,
}: {
  content: ContentBlock['content']
  children: ContentBlock['children']
}) => {
  if (content) {
    return content
  } else if (Array.isArray(children) && children.length) {
    return serializeHtml(children)
  } else {
    return null
  }
}

export const serializeHtml = (arr: ContentBlock[]) => {
  return arr.map(
    ({ type, props, content, component: Component, children }, i) => {
      const { className, ...propsLessClassName } = props || {}

      switch (type) {
        case 'h1': {
          return (
            <h1 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h1>
          )
        }
        case 'h2': {
          return (
            <h2 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h2>
          )
        }
        case 'h3': {
          return (
            <h3 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h3>
          )
        }
        case 'h4': {
          return (
            <h4 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h4>
          )
        }
        case 'h5': {
          return (
            <h5 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h5>
          )
        }
        case 'h6': {
          return (
            <h6 key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </h6>
          )
        }
        case 'p': {
          return (
            <p key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </p>
          )
        }
        case 'b':
        case 'strong': {
          return (
            <strong key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </strong>
          )
        }
        case 'i': {
          return (
            <i key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </i>
          )
        }
        case 'ul': {
          return (
            <ul
              key={i}
              className={`list-disc list-inside${
                className ? ` ${className}` : ``
              }`}
              {...propsLessClassName}
            >
              {mapContentOrChildren({ content, children })}
            </ul>
          )
        }
        case 'ol': {
          return (
            <ol
              key={i}
              className={`list-decimal list-inside${
                className ? ` ${className}` : ``
              }`}
              {...propsLessClassName}
            >
              {mapContentOrChildren({ content, children })}
            </ol>
          )
        }
        case 'li': {
          return (
            <li key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </li>
          )
        }
        case 'div': {
          return (
            <div key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </div>
          )
        }
        case 'sup': {
          return (
            <sup key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </sup>
          )
        }
        case 'sub': {
          return (
            <sub key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </sub>
          )
        }
        case 'code': {
          return (
            <code key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </code>
          )
        }
        case 'dom-parser': {
          const parser = new DOMParser()
          const dom = parser.parseFromString(
            '<!doctype html><body>' + content,
            'text/html',
          )
          return dom.body.textContent
        }
        case 'a': {
          const linkProps = props as LinkProps
          return (
            <Link key={i} {...linkProps}>
              {mapContentOrChildren({ content, children })}
            </Link>
          )
        }
        case 'emoji': {
          const symbol = content as number
          return <Emoji key={i} {...props} symbol={symbol} />
        }
        case 'chip': {
          return (
            <Chip key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </Chip>
          )
        }
        case 'react-icon': {
          return Component ? <Component key={i} {...props} /> : null
        }
        case 'ResumeItem': {
          return (
            <ResumeItem key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </ResumeItem>
          )
        }
        case 'ResumeItemHeading': {
          const resumeItemHeadingProps = props as ResumeItemHeadingProps
          return <ResumeItemHeading key={i} {...resumeItemHeadingProps} />
        }
        case 'ResumeItemContent': {
          return (
            <ResumeItemContent key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </ResumeItemContent>
          )
        }
        default: {
          return (
            <span key={i} {...props}>
              {mapContentOrChildren({ content, children })}
            </span>
          )
        }
      }
    },
  )
}

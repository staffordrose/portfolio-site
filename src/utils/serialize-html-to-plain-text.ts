import { ContentBlock } from '@/common/types'

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
    return serializeHtmlToPlainText(children)
  } else {
    return ''
  }
}

const serializeHtmlToPlainText = (arr: ContentBlock[]): string => {
  return arr
    .map(({ type, content, children }) => {
      switch (type) {
        case 'p':
          return `${mapContentOrChildren({ content, children })} `
        case 'span':
        case 'strong':
        case 'i':
        case 'li':
        case 'div':
        case 'sup':
        case 'sub':
        case 'code':
        case 'a':
        case 'chip':
          return mapContentOrChildren({ content, children })
        case 'ul':
          return `${
            children
              ?.map(
                (c, i) =>
                  `${
                    i === 0 ? `` : i === children.length - 1 ? `, and ` : `, `
                  }${mapContentOrChildren({
                    content: c.content,
                    children: c.children,
                  })}`,
              )
              .join('') || ''
          }. `
        case 'ol':
          return `${
            children
              ?.map(
                (c, i) =>
                  `${
                    i === 0 ? `` : i === children.length - 1 ? `, and ` : `, `
                  }${i + 1}. ${mapContentOrChildren({
                    content: c.content,
                    children: c.children,
                  })}`,
              )
              .join('') || ''
          }. `
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'dom-parser':
        case 'emoji':
        case 'react-icon':
        case 'ResumeItem':
        case 'ResumeItemHeading':
        case 'ResumeItemContent':
        default:
          return ''
      }
    })
    .join('')
}

export default serializeHtmlToPlainText

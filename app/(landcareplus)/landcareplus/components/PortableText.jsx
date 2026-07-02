import React from 'react';

function renderSpans(children) {
  return (children || []).map((span, i) => {
    let node = span.text;
    if (span.marks?.includes('strong')) node = <strong key={i}>{node}</strong>;
    if (span.marks?.includes('em')) node = <em key={i}>{node}</em>;
    return <React.Fragment key={span._key || i}>{node}</React.Fragment>;
  });
}

const headingStyle = {
  h2: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)', margin: '40px 0 16px' },
  h3: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, color: 'var(--text-strong)', margin: '28px 0 12px' },
  h4: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)', margin: '22px 0 10px' },
};

export function PortableText({ value }) {
  const blocks = value || [];
  const elements = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.listItem) {
      const listType = block.listItem;
      const items = [];
      while (i < blocks.length && blocks[i].listItem === listType) {
        items.push(blocks[i]);
        i += 1;
      }
      const ListTag = listType === 'number' ? 'ol' : 'ul';
      elements.push(
        <ListTag key={block._key || i} style={{ margin: '0 0 20px', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item, idx) => (
            <li key={item._key || idx} style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)' }}>
              {renderSpans(item.children)}
            </li>
          ))}
        </ListTag>
      );
      continue;
    }

    if (block.style === 'h2' || block.style === 'h3' || block.style === 'h4') {
      const Tag = block.style;
      elements.push(
        <Tag key={block._key || i} style={headingStyle[block.style]}>
          {renderSpans(block.children)}
        </Tag>
      );
      i += 1;
      continue;
    }

    if (block.style === 'blockquote') {
      elements.push(
        <blockquote
          key={block._key || i}
          style={{ margin: '0 0 20px', padding: '4px 20px', borderLeft: '3px solid var(--color-primary)', fontStyle: 'italic', color: 'var(--text-body)', fontSize: 16.5, lineHeight: 1.65 }}
        >
          {renderSpans(block.children)}
        </blockquote>
      );
      i += 1;
      continue;
    }

    elements.push(
      <p key={block._key || i} style={{ margin: '0 0 20px', fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-body)' }}>
        {renderSpans(block.children)}
      </p>
    );
    i += 1;
  }

  return <>{elements}</>;
}

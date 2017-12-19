import React, {Component} from 'react';
import {Header, Table} from 'semantic-ui-react';

const RenderTable = ({template, handleView}, i) => {
  return (
    <Table.Row key={i}>
      <Table.Cell>
        {template.name}
      </Table.Cell>
      <Table.Cell>
        {template.category}
      </Table.Cell>
      <Table.Cell>
        {template.updatedAt}
      </Table.Cell>
      <Table.Cell>
        {template.createdAt}
      </Table.Cell>
      <Table.Cell>
        {template.createdAt}
      </Table.Cell>
      <Table.Cell>
        <button onClick={() => handleView (template.name)}>
          view
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default RenderTable;

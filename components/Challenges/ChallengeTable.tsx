import { Table } from "@mantine/core";

const ChallengeTable = () => {
  return (
    <div>
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            {/* here make the column small just for the icon */}
            <Table.Th>Status</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Difficulty</Table.Th>
            <Table.Th>Frequency</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>icon</Table.Td>
            <Table.Td>Test</Table.Td>
            <Table.Td>Easy</Table.Td>
            <Table.Td>progress bar</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>icon</Table.Td>
            <Table.Td>Test2</Table.Td>
            <Table.Td>Medium</Table.Td>
            <Table.Td>progress bar</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default ChallengeTable;

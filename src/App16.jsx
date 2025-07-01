import { Alert, Button, Table } from "react-bootstrap";

export default function App16() {
  return (
    <>
      <button className={"btn btn-primary"}>저장</button>
      <Button>등록</Button>
      <Button variant={"warning"}>워닝</Button>
      <Button variant={"danger"}>위험</Button>
      <hr />
      <Button
        disabled={undefined}
        active={true}
        type={"submit"}
        size={"sm"}
        onClick="click"
      >
        스몰
      </Button>
      <Alert variant={"info"}>인포</Alert>
      <Alert variant={"danger"}>위험</Alert>
      <Alert variant={"warning"}>경고</Alert>
      <Alert variant={"success"}>성공</Alert>
      <Table hover={true} width={15} bordered={true} striped={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>95</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

// app/not-found.js
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>404 - Page Not Found</h1>
      <p>죄송합니다, 요청하신 페이지를 찾을 수 없습니다.</p>
      <a href="/">홈으로 돌아가기</a>
    </div>
  );
}

// 네비게이션 링크 클릭 시 강조 표시
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.style.color = "red"; // 현재 페이지 링크 강조
      }
    });
  });
  
  // 연락처 페이지 폼 제출 알림 예시 (contact.html에 폼이 있을 경우)
  function submitContactForm(event) {
    event.preventDefault(); // 페이지 새로고침 방지
    alert("감사합니다! 곧 연락드리겠습니다.");
  }
  
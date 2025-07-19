/**
 * WIDGET LOADER SCRIPT
 * * Nhiệm vụ:
 * 1. Được nhúng trực tiếp vào website của khách hàng.
 * 2. Tìm thẻ <script> của chính nó để lấy `widgetId`.
 * 3. Tạo một <iframe> để chứa giao diện widget, giúp cô lập widget khỏi trang web chủ.
 * 4. Truyền các thông tin cần thiết (`widgetId`, URL trang web chủ) vào <iframe> qua URL parameters.
 */
(function () {
  // Bảo vệ khỏi việc chạy lại script nếu có lỗi xảy ra
  if (window.myChatWidget) {
    return;
  }
  window.myChatWidget = true;

  // Lấy thẻ script hiện tại đang được thực thi
  const scriptTag = document.currentScript;
  if (!scriptTag) {
    console.error(
      "Chat Widget: Không thể tìm thấy thẻ script. Vui lòng đảm bảo script được tải đúng cách."
    );
    return;
  }

  // Lấy widgetId từ thuộc tính data-
  const widgetId = scriptTag.getAttribute("data-widget-id");
  if (!widgetId) {
    console.error("Chat Widget: Thuộc tính 'data-widget-id' là bắt buộc.");
    return;
  }

  // Lấy URL của trang web đang nhúng widget
  const hostPageUrl = window.location.href;

  // Tạo một thẻ <iframe>
  const iframe = document.createElement("iframe");

  // Xây dựng URL cho iframe, truyền widgetId và hostUrl
  const iframeSrc = new URL("widget.html", scriptTag.src); // Giả định widget.html cùng thư mục với loader
  iframeSrc.searchParams.set("widgetId", widgetId);
  iframeSrc.searchParams.set("hostUrl", hostPageUrl);

  // Thiết lập các thuộc tính cho iframe
  iframe.src = iframeSrc.toString();
  iframe.id = "chat-widget-iframe";
  iframe.title = "Chat Widget";
  // Style cho iframe để nó nằm ở góc dưới bên phải và không có viền
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px"; // Chiều rộng tối đa
  iframe.style.height = "calc(100% - 40px)"; // Chiều cao tối đa
  iframe.style.maxWidth = "100%";
  iframe.style.maxHeight = "700px";
  iframe.style.border = "none";
  iframe.style.zIndex = "999999";
  iframe.style.backgroundColor = "transparent";
  iframe.style.overflow = "hidden";
  //   iframe.style.boxShadow = "0 5px 40px rgba(0,0,0,.16)";
  iframe.style.borderRadius = "12px";

  // Thêm iframe vào body của trang
  document.body.appendChild(iframe);
})();

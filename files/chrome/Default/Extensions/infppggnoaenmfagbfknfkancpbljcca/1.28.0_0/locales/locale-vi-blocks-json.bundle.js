"use strict";(self.webpackChunkautoma=self.webpackChunkautoma||[]).push([[342],{87950:(n,t,r)=>{r.r(t),r.d(t,{default:()=>e});const e={collection:{blocks:{"export-result":{name:n=>{const{normalize:t}=n;return t(["Xuất kết quả"])},description:n=>{const{normalize:t}=n;return t(["Xuất kết quả thu thập dưới dạng JSON"])}}}},workflow:{blocks:{base:{title:n=>{const{normalize:t}=n;return t(["Khối"])},moveToGroup:n=>{const{normalize:t}=n;return t(["Di chuyển khối sang nhóm khối"])},selector:n=>{const{normalize:t}=n;return t(["Bộ chọn phần tử"])},selectorOptions:n=>{const{normalize:t}=n;return t(["Tùy chọn bộ chọn"])},timeout:n=>{const{normalize:t}=n;return t(["Thời gian chờ (mili giây)"])},noPermission:n=>{const{normalize:t}=n;return t(["Automa không có đủ quyền để thực hiện hành động này"])},grantPermission:n=>{const{normalize:t}=n;return t(["Cấp phép"])},action:n=>{const{normalize:t}=n;return t(["Hoạt động"])},element:{select:n=>{const{normalize:t}=n;return t(["Chọn một phần tử"])},verify:n=>{const{normalize:t}=n;return t(["Xác minh bộ chọn"])}},settings:{title:n=>{const{normalize:t}=n;return t(["Cài đặt chặn"])},line:{title:n=>{const{normalize:t}=n;return t(["Dòng"])},label:n=>{const{normalize:t}=n;return t(["Nhãn dòng"])},animated:n=>{const{normalize:t}=n;return t(["Hoạt hình"])},select:n=>{const{normalize:t}=n;return t(["Chọn dòng"])},to:n=>{const{normalize:t,interpolate:r,named:e}=n;return t(["Dòng tới khối ",r(e("name"))])},lineColor:n=>{const{normalize:t}=n;return t(["Màu đường kẻ"])}}},toggle:{enable:n=>{const{normalize:t}=n;return t(["Bật khối"])},disable:n=>{const{normalize:t}=n;return t(["Tắt khối"])}},onError:{info:n=>{const{normalize:t}=n;return t(["Các quy tắc này sẽ được áp dụng khi có lỗi xảy ra trên khối"])},button:n=>{const{normalize:t}=n;return t(["Có lỗi"])},title:n=>{const{normalize:t}=n;return t(["Khi xảy ra lỗi"])},retry:n=>{const{normalize:t}=n;return t(["Thử lại hành động"])},fallbackTitle:n=>{const{normalize:t}=n;return t(["Sẽ thực thi khi có lỗi xảy ra trong khối"])},times:{name:n=>{const{normalize:t}=n;return t(["Thời gian"])},description:n=>{const{normalize:t}=n;return t(["Số lần thử lại hành động"])}},interval:{name:n=>{const{normalize:t}=n;return t(["Khoảng thời gian"])},description:n=>{const{normalize:t}=n;return t(["Khoảng thời gian chờ giữa mỗi lần thử"])},second:n=>{const{normalize:t}=n;return t(["thứ hai"])}},toDo:{error:n=>{const{normalize:t}=n;return t(["Ném lỗi"])},continue:n=>{const{normalize:t}=n;return t(["Tiếp tục dòng chảy"])},fallback:n=>{const{normalize:t}=n;return t(["Thực thi dự phòng"])},restart:n=>{const{normalize:t}=n;return t(["Khởi động lại quy trình"])}},insertData:{name:n=>{const{normalize:t}=n;return t(["Chèn dữ liệu"])}}},table:{checkbox:n=>{const{normalize:t}=n;return t(["Chèn vào bảng"])},select:n=>{const{normalize:t}=n;return t(["Chọn cột"])},extraRow:{checkbox:n=>{const{normalize:t}=n;return t(["Thêm hàng bổ sung"])},placeholder:n=>{const{normalize:t}=n;return t(["Giá trị"])},title:n=>{const{normalize:t}=n;return t(["Giá trị của hàng phụ"])}}},findElement:{placeholder:n=>{const{normalize:t}=n;return t(["Tìm phần tử bằng"])},options:{cssSelector:n=>{const{normalize:t}=n;return t(["Bộ chọn CSS"])},xpath:n=>{const{normalize:t}=n;return t(["XPath"])}}},markElement:{title:n=>{const{normalize:t}=n;return t(["Một phần tử sẽ không được chọn nếu nó đã được chọn trước đó"])},text:n=>{const{normalize:t}=n;return t(["Đánh dấu phần tử"])}},multiple:{title:n=>{const{normalize:t}=n;return t(["Chọn nhiều phần tử"])},text:n=>{const{normalize:t}=n;return t(["Nhiều"])}},waitSelector:{title:n=>{const{normalize:t}=n;return t(["Chờ bộ chọn"])},timeout:n=>{const{normalize:t}=n;return t(["Thời gian chờ của bộ chọn (mili giây)"])}},downloads:{onConflict:{uniquify:n=>{const{normalize:t}=n;return t(["Thống nhất"])},overwrite:n=>{const{normalize:t}=n;return t(["Ghi đè"])},prompt:n=>{const{normalize:t}=n;return t(["Lời nhắc"])}}}},"wait-connections":{name:n=>{const{normalize:t}=n;return t(["Chờ kết nối"])},description:n=>{const{normalize:t}=n;return t(["Chờ tất cả các kết nối trước khi tiếp tục khối tiếp theo"])},specificFlow:n=>{const{normalize:t}=n;return t(["Chỉ tiếp tục một quy trình cụ thể"])},selectFlow:n=>{const{normalize:t}=n;return t(["Chọn luồng"])}},cookie:{name:n=>{const{normalize:t}=n;return t(["Cookie"])},description:n=>{const{normalize:t}=n;return t(["Nhận, đặt hoặc xóa cookie"])},types:{get:n=>{const{normalize:t}=n;return t(["Nhận cookie"])},set:n=>{const{normalize:t}=n;return t(["Đặt cookie"])},remove:n=>{const{normalize:t}=n;return t(["Xóa cookie"])},getAll:n=>{const{normalize:t}=n;return t(["Nhận tất cả cookie"])}}},note:{name:n=>{const{normalize:t}=n;return t(["Ghi chú"])}},"slice-variable":{name:n=>{const{normalize:t}=n;return t(["Biến Slice"])},description:n=>{const{normalize:t}=n;return t(["Trích xuất một phần của một giá trị biến"])},start:n=>{const{normalize:t}=n;return t(["Bắt đầu lập chỉ mục"])},end:n=>{const{normalize:t}=n;return t(["Chỉ mục kết thúc"])}},"workflow-state":{name:n=>{const{normalize:t}=n;return t(["Trạng thái quy trình làm việc"])},description:n=>{const{normalize:t}=n;return t(["Quản lý trạng thái quy trình công việc"])},actions:{stop:n=>{const{normalize:t}=n;return t(["Dừng quy trình công việc"])}}},"regex-variable":{name:n=>{const{normalize:t}=n;return t(["Biến RegEx"])},description:n=>{const{normalize:t}=n;return t(["Khớp một giá trị biến với một biểu thức chính quy"])}},"data-mapping":{source:n=>{const{normalize:t}=n;return t(["Nguồn"])},destination:n=>{const{normalize:t}=n;return t(["Điểm đến"])},name:n=>{const{normalize:t}=n;return t(["Ánh xạ dữ liệu"])},edit:n=>{const{normalize:t}=n;return t(["Chỉnh sửa bản đồ dữ liệu"])},dataSource:n=>{const{normalize:t}=n;return t(["Nguồn dữ liệu"])},description:n=>{const{normalize:t}=n;return t(["Ánh xạ dữ liệu của một biến hoặc bảng"])},addSource:n=>{const{normalize:t}=n;return t(["Thêm nguồn"])},addDestination:n=>{const{normalize:t}=n;return t(["Thêm điểm đến"])}},"sort-data":{name:n=>{const{normalize:t}=n;return t(["Sắp xếp dữ liệu"])},description:n=>{const{normalize:t}=n;return t(["Sắp xếp các mục dữ liệu"])},property:n=>{const{normalize:t}=n;return t(["Sắp xếp theo thuộc tính của mặt hàng"])},addProperty:n=>{const{normalize:t}=n;return t(["Thêm tài sản"])}},"increase-variable":{name:n=>{const{normalize:t}=n;return t(["Tăng biến"])},description:n=>{const{normalize:t}=n;return t(["Tăng giá trị của một biến bằng số tiền cụ thể"])},increase:n=>{const{normalize:t}=n;return t(["Tăng bởi"])}},notification:{name:n=>{const{normalize:t}=n;return t(["thông báo"])},description:n=>{const{normalize:t}=n;return t(["Hiển thị thông báo"])},title:n=>{const{normalize:t}=n;return t(["Tiêu đề"])},message:n=>{const{normalize:t}=n;return t(["Thông điệp"])},imageUrl:n=>{const{normalize:t}=n;return t(["URL hình ảnh (tùy chọn)"])},iconUrl:n=>{const{normalize:t}=n;return t(["URL biểu tượng (tùy chọn)"])}},"delete-data":{name:n=>{const{normalize:t}=n;return t(["Xóa dữ liệu"])},description:n=>{const{normalize:t}=n;return t(["Xóa bảng hoặc dữ liệu biến"])},from:n=>{const{normalize:t}=n;return t(["Dữ liệu từ"])},allColumns:n=>{const{normalize:t}=n;return t(["[Tất cả các cột]"])}},"log-data":{name:n=>{const{normalize:t}=n;return t(["Get log data"])},description:n=>{const{normalize:t}=n;return t(["Nhận dữ liệu nhật ký mới nhất của quy trình làm việc"])},data:n=>{const{normalize:t}=n;return t(["Ghi dữ liệu"])}},"tab-url":{name:n=>{const{normalize:t}=n;return t(["Nhận URL tab"])},description:n=>{const{normalize:t}=n;return t(["Lấy URL của tab"])},select:n=>{const{normalize:t}=n;return t(["Chọn tab"])},types:{"active-tab":n=>{const{normalize:t}=n;return t(["Tab hoạt động"])},all:n=>{const{normalize:t}=n;return t(["Tất cả các tab"])}}},"reload-tab":{name:n=>{const{normalize:t}=n;return t(["Tải lại tab"])},description:n=>{const{normalize:t}=n;return t(["Tải lại tab đang hoạt động"])}},"press-key":{name:n=>{const{normalize:t}=n;return t(["Nhấn phím"])},description:n=>{const{normalize:t}=n;return t(["Nhấn một phím hoặc một tổ hợp"])},target:n=>{const{normalize:t}=n;return t(["Yếu tố mục tiêu (tùy chọn)"])},key:n=>{const{normalize:t}=n;return t(["Chìa khóa"])},detect:n=>{const{normalize:t}=n;return t(["Phát hiện khóa"])},actions:{"press-key":n=>{const{normalize:t}=n;return t(["Nhấn một phím"])},"multiple-keys":n=>{const{normalize:t}=n;return t(["Nhấn nhiều phím"])}}},"save-assets":{name:n=>{const{normalize:t}=n;return t(["Tiết kiệm tài sản"])},description:n=>{const{normalize:t}=n;return t(["Lưu nội dung (hình ảnh, video, âm thanh hoặc tệp) từ một phần tử hoặc URL"])},filename:n=>{const{normalize:t}=n;return t(["Tên tệp (tùy chọn)"])},contentTypes:{title:n=>{const{normalize:t}=n;return t(["Loại hình"])},element:n=>{const{normalize:t}=n;return t(["Phần tử phương tiện (hình ảnh, âm thanh hoặc video)"])},url:n=>{const{normalize:t}=n;return t(["URL"])}}},"handle-dialog":{name:n=>{const{normalize:t}=n;return t(["Xử lý hộp thoại"])},description:n=>{const{normalize:t}=n;return t(["Chấp nhận hoặc loại bỏ hộp thoại khởi tạo JavaScript (cảnh báo, xác nhận, lời nhắc hoặc tải lên trên)."])},accept:n=>{const{normalize:t}=n;return t(["Hộp thoại chấp nhận"])},promptText:{label:n=>{const{normalize:t}=n;return t(["Văn bản nhắc nhở (tùy chọn)"])},description:n=>{const{normalize:t}=n;return t(["Văn bản cần nhập vào lời nhắc hộp thoại trước khi chấp nhận"])}}},"handle-download":{name:n=>{const{normalize:t}=n;return t(["Xử lý tải xuống"])},description:n=>{const{normalize:t}=n;return t(["Xử lý tệp đã tải xuống"])},timeout:n=>{const{normalize:t}=n;return t(["Thời gian chờ (mili giây)"])},noPermission:n=>{const{normalize:t}=n;return t(["Không có quyền truy cập các bản tải xuống"])},onConflict:n=>{const{normalize:t}=n;return t(["Xung đột"])},waitFile:n=>{const{normalize:t}=n;return t(["Chờ tệp được tải xuống"])}},"insert-data":{name:n=>{const{normalize:t}=n;return t(["Chèn dữ liệu"])},description:n=>{const{normalize:t}=n;return t(["Chèn dữ liệu vào bảng hoặc biến"])}},clipboard:{name:n=>{const{normalize:t}=n;return t(["Bộ nhớ tạm"])},description:n=>{const{normalize:t}=n;return t(["Lấy văn bản đã sao chép từ khay nhớ tạm"])},data:n=>{const{normalize:t}=n;return t(["Dữ liệu bảng tạm"])},noPermission:n=>{const{normalize:t}=n;return t(["Không có quyền truy cập khay nhớ tạm"])},grantPermission:n=>{const{normalize:t}=n;return t(["Cấp phép"])},copySelection:n=>{const{normalize:t}=n;return t(["Sao chép văn bản đã chọn trên trang"])},types:{get:n=>{const{normalize:t}=n;return t(["Nhận dữ liệu khay nhớ tạm"])},insert:n=>{const{normalize:t}=n;return t(["Chèn văn bản vào khay nhớ tạm"])}}},"hover-element":{name:n=>{const{normalize:t}=n;return t(["Hover element"])},description:n=>{const{normalize:t}=n;return t(["Hover over an element"])}},"create-element":{name:n=>{const{normalize:t}=n;return t(["Tạo phần tử"])},description:n=>{const{normalize:t}=n;return t(["Tạo một phần tử và chèn nó vào trang"])},edit:n=>{const{normalize:t}=n;return t(["Chỉnh sửa phần tử"])},wrap:n=>{const{normalize:t}=n;return t(["Bọc phần tử bên trong"])},insertEl:{title:n=>{const{normalize:t}=n;return t(["Chèn phần tử"])},items:{before:n=>{const{normalize:t}=n;return t(["Là đứa con đầu lòng"])},after:n=>{const{normalize:t}=n;return t(["Là đứa con cuối cùng"])},"next-sibling":n=>{const{normalize:t}=n;return t(["Là anh chị em tiếp theo"])},"prev-sibling":n=>{const{normalize:t}=n;return t(["Là anh chị em trước"])},replace:n=>{const{normalize:t}=n;return t(["Thay thế phần tử mục tiêu"])}}}},"upload-file":{name:n=>{const{normalize:t}=n;return t(["Cập nhật dử liệu"])},description:n=>{const{normalize:t}=n;return t(['Tải tệp lên phần tử <input type="file">'])},filePath:n=>{const{normalize:t}=n;return t(["URL hoặc đường dẫn tệp"])},addFile:n=>{const{normalize:t}=n;return t(["Thêm tập tin"])},onlyURL:n=>{const{normalize:t}=n;return t(["Chỉ hỗ trợ tải tệp lên từ một URL trong trình duyệt Firefox"])},requirement:n=>{const{normalize:t}=n;return t(["Xem yêu cầu trước khi sử dụng khối này"])},noFileAccess:n=>{const{normalize:t}=n;return t(["Automa không có quyền truy cập tệp"])}},"browser-event":{name:n=>{const{normalize:t}=n;return t(["Sự kiện trình duyệt"])},description:n=>{const{normalize:t}=n;return t(["Thực thi khối tiếp theo khi sự kiện được kích hoạt"])},events:n=>{const{normalize:t}=n;return t(["Sự kiện"])},timeout:n=>{const{normalize:t}=n;return t(["Thời gian chờ (mili giây)"])},activeTabLoaded:n=>{const{normalize:t}=n;return t(["Tab hoạt động"])},setAsActiveTab:n=>{const{normalize:t}=n;return t(["Đặt làm tab hoạt động"])}},"blocks-group-2":{name:n=>{const{normalize:t,linked:r,type:e}=n;return t([r("workflow.blocks.blocks-group.name",void 0,e)," 2"])},description:n=>{const{normalize:t,linked:r,type:e}=n;return t([r("workflow.blocks.blocks-group.description",void 0,e)])}},"blocks-group":{name:n=>{const{normalize:t}=n;return t(["Nhóm khối"])},groupName:n=>{const{normalize:t}=n;return t(["Tên nhóm"])},description:n=>{const{normalize:t}=n;return t(["Nhóm các khối"])},dropText:n=>{const{normalize:t}=n;return t(["Kéo và thả một khối ở đây"])},cantAdd:n=>{const{normalize:t,interpolate:r,named:e}=n;return t(['Không thể thêm khối "',r(e("blockName")),'" vào nhóm.'])}},trigger:{name:n=>{const{normalize:t}=n;return t(["Kích hoạt"])},description:n=>{const{normalize:t}=n;return t(["Quy trình bắt đầu được thực thi ở đây"])},addTime:n=>{const{normalize:t}=n;return t(["Thêm thời gian"])},selectDay:n=>{const{normalize:t}=n;return t(["Chọn ngày"])},timeExist:n=>{const{normalize:t,interpolate:r,named:e}=n;return t(["Bạn đã thêm ",r(e("time"))," vào ",r(e("day"))])},fixedDelay:n=>{const{normalize:t}=n;return t(["Cố định độ trễ"])},contextMenus:{noPermission:n=>{const{normalize:t}=n;return t(['Trình kích hoạt này yêu cầu quyền "contextMenus" để hoạt động'])},grantPermission:n=>{const{normalize:t}=n;return t(["Cấp phép"])},appearIn:n=>{const{normalize:t}=n;return t(["Sẽ xuất hiện trong"])},contextName:n=>{const{normalize:t}=n;return t(["Tên quy trình làm việc trong menu ngữ cảnh"])}},days:[n=>{const{normalize:t}=n;return t(["Chủ nhật"])},n=>{const{normalize:t}=n;return t(["Thứ hai"])},n=>{const{normalize:t}=n;return t(["Thứ ba"])},n=>{const{normalize:t}=n;return t(["Thứ tư"])},n=>{const{normalize:t}=n;return t(["Thứ năm"])},n=>{const{normalize:t}=n;return t(["Thứ sáu"])},n=>{const{normalize:t}=n;return t(["Thứ bảy"])}],useRegex:n=>{const{normalize:t}=n;return t(["Dùng regex"])},shortcut:{tooltip:n=>{const{normalize:t}=n;return t(["Ghi lại lối tắt"])},stopRecord:n=>{const{normalize:t}=n;return t(["Dừng ghi"])},checkboxTitle:n=>{const{normalize:t}=n;return t(["Execute shortcut even when you're in an input element"])},checkbox:n=>{const{normalize:t}=n;return t(["Hoạt động khi nhập liệu"])},note:n=>{const{normalize:t}=n;return t(["Lưu ý: phím tắt chỉ hoạt động khi bạn đang truy cập một trang web"])}},forms:{triggerWorkflow:n=>{const{normalize:t}=n;return t(["Quy trình kích hoạt"])},interval:n=>{const{normalize:t}=n;return t(["Chu kỳ (phút)"])},delay:n=>{const{normalize:t}=n;return t(["Độ trễ (phút)"])},date:n=>{const{normalize:t}=n;return t(["Ngày"])},time:n=>{const{normalize:t}=n;return t(["Giờ"])},url:n=>{const{normalize:t}=n;return t(["URL hoặc Regex"])},shortcut:n=>{const{normalize:t}=n;return t(["Phim tắt"])},"cron-expression":n=>{const{normalize:t}=n;return t(["Biểu thức cron"])}},"element-change":{target:n=>{const{normalize:t}=n;return t(["Mục tiêu yếu tố để quan sát"])},optionsInfo:n=>{const{normalize:t}=n;return t(["Đột biến phần tử nào sẽ kích hoạt quy trình làm việc"])},targetWebsite:n=>{const{normalize:t}=n;return t(["Mẫu Đối sánh của trang web có phần tử mục tiêu (nhấp để xem thêm các ví dụ về Mẫu Đối sánh)"])},baseEl:{title:n=>{const{normalize:t}=n;return t(["Phần tử cơ sở (tùy chọn)"])},description:n=>{const{normalize:t}=n;return t(["Automa sẽ bắt đầu lại việc quan sát phần tử mục tiêu khi phần tử này thay đổi"])}},subtree:{title:n=>{const{normalize:t}=n;return t(["Bao gồm cây con"])},description:n=>{const{normalize:t}=n;return t(["Mở rộng giám sát cho toàn bộ cây con của phần tử mục tiêu"])}},childList:{title:n=>{const{normalize:t}=n;return t(["Danh sách con"])},description:n=>{const{normalize:t}=n;return t(["Giám sát việc thêm các phần tử con mới hoặc xóa các phần tử con hiện có"])}},attributes:{title:n=>{const{normalize:t}=n;return t(["Thuộc tính"])},description:n=>{const{normalize:t}=n;return t(["Theo dõi các thay đổi đối với giá trị của các thuộc tính trên phần tử mục tiêu"])}},attributeFilter:{title:n=>{const{normalize:t}=n;return t(["Bộ lọc thuộc tính"])},separate:n=>{const{normalize:t}=n;return t(["Sử dụng dấu phẩy (,) để phân tách tên thuộc tính"])},description:n=>{const{normalize:t}=n;return t(["Chỉ theo dõi các thuộc tính cụ thể (để trống để theo dõi tất cả)"])}},characterData:{title:n=>{const{normalize:t}=n;return t(["Dữ liệu ký tự"])},description:n=>{const{normalize:t}=n;return t(["Theo dõi các thay đổi đối với dữ liệu / văn bản ký tự trong phần tử đích"])}}},items:{manual:n=>{const{normalize:t}=n;return t(["Thủ công"])},interval:n=>{const{normalize:t}=n;return t(["Chu kỳ"])},"cron-job":n=>{const{normalize:t}=n;return t(["Lập lịch công việc"])},date:n=>{const{normalize:t}=n;return t(["Vào một ngày cụ thể"])},"context-menu":n=>{const{normalize:t}=n;return t(["Danh mục"])},"element-change":n=>{const{normalize:t}=n;return t(["Khi phần tử thay đổi"])},"specific-day":n=>{const{normalize:t}=n;return t(["Vào một ngày cụ thể"])},"visit-web":n=>{const{normalize:t}=n;return t(["Khi truy cập một trang web"])},"on-startup":n=>{const{normalize:t}=n;return t(["Khi khởi động trình duyệt"])},"keyboard-shortcut":n=>{const{normalize:t}=n;return t(["Phim tắt"])}}},"execute-workflow":{name:n=>{const{normalize:t}=n;return t(["Thực thi quy trình"])},overwriteNote:n=>{const{normalize:t}=n;return t(["Thao tác này sẽ ghi đè lên dữ liệu chung của quy trình đã chọn"])},select:n=>{const{normalize:t}=n;return t(["Chọn quy trình"])},executeId:n=>{const{normalize:t}=n;return t(["Thực thi ID (tùy chọn)"])},description:n=>{const{normalize:t}=n;return t([])},insertAllVars:n=>{const{normalize:t}=n;return t(["Chèn tất cả các biến quy trình làm việc hiện tại"])},insertVars:n=>{const{normalize:t}=n;return t(["Chèn các biến quy trình công việc hiện tại"])},useCommas:n=>{const{normalize:t}=n;return t(["Sử dụng dấu phẩy để phân tách tên biến"])}},"google-sheets":{name:n=>{const{normalize:t}=n;return t(["Google sheets"])},description:n=>{const{normalize:t}=n;return t(["Đọc hoặc cập nhật dữ liệu Google Trang tính"])},previewData:n=>{const{normalize:t}=n;return t(["Xem trước dữ liệu"])},firstRow:n=>{const{normalize:t}=n;return t(["Sử dụng hàng đầu tiên làm khóa"])},keysAsFirstRow:n=>{const{normalize:t}=n;return t(["Sử dụng các phím làm hàng đầu tiên"])},insertData:n=>{const{normalize:t}=n;return t(["Chèn dữ liệu"])},valueInputOption:n=>{const{normalize:t}=n;return t(["Tùy chọn nhập giá trị"])},insertDataOption:n=>{const{normalize:t}=n;return t(["Chèn tùy chọn dữ liệu"])},rangeToSearch:n=>{const{normalize:t}=n;return t(["Phạm vi bắt đầu tìm kiếm"])},dataFrom:{label:n=>{const{normalize:t}=n;return t(["Dữ liệu từ"])},options:{"data-columns":n=>{const{normalize:t}=n;return t(["Bảng"])},custom:n=>{const{normalize:t}=n;return t(["Tùy chỉnh"])}}},refKey:{label:n=>{const{normalize:t}=n;return t(["Khóa tham chiếu (tùy chọn)"])},placeholder:n=>{const{normalize:t}=n;return t(["Tên khóa"])}},spreadsheetId:{label:n=>{const{normalize:t}=n;return t(["Id bảng tính"])},link:n=>{const{normalize:t}=n;return t(["Xem cách lấy ID bảng tính"])}},range:{label:n=>{const{normalize:t}=n;return t(["Phạm vi"])},link:n=>{const{normalize:t}=n;return t(["Bấm để xem thêm ví dụ"])}},select:{get:n=>{const{normalize:t}=n;return t(["Nhận giá trị ô bảng tính"])},getRange:n=>{const{normalize:t}=n;return t(["Nhận phạm vi bảng tính"])},update:n=>{const{normalize:t}=n;return t(["Cập nhật giá trị ô bảng tính"])},append:n=>{const{normalize:t}=n;return t(["Nối các giá trị ô bảng tính"])},clear:n=>{const{normalize:t}=n;return t(["Xóa giá trị ô bảng tính"])}}},"active-tab":{name:n=>{const{normalize:t}=n;return t(["Tab hoạt động"])},description:n=>{const{normalize:t}=n;return t(["Chỉ định tab hiện tại mà bạn đang truy cập thành tab đang hoạt động"])}},proxy:{name:n=>{const{normalize:t}=n;return t(["Proxy"])},description:n=>{const{normalize:t}=n;return t(["Thiết lập proxy của trình duyệt"])},clear:n=>{const{normalize:t}=n;return t(["Xóa tất cả proxy"])},bypass:{label:n=>{const{normalize:t}=n;return t(["Danh sách bỏ qua"])},note:n=>{const{normalize:t}=n;return t(["Dùng dấu phẩy (,) để tách biệt URL"])}}},"new-window":{name:n=>{const{normalize:t}=n;return t(["Cửa sổ mới"])},description:n=>{const{normalize:t}=n;return t(["Tạo cửa sổ mới"])},top:n=>{const{normalize:t}=n;return t(["Trên"])},left:n=>{const{normalize:t}=n;return t(["Trái"])},height:n=>{const{normalize:t}=n;return t(["Chiều cao"])},width:n=>{const{normalize:t}=n;return t(["Chiều rộng"])},note:n=>{const{normalize:t}=n;return t(["Lưu ý: sử dụng số 0 để tắt"])},position:n=>{const{normalize:t}=n;return t(["Vị trí cửa sổ"])},size:n=>{const{normalize:t}=n;return t(["Kích thước cửa sổ"])},windowState:{placeholder:n=>{const{normalize:t}=n;return t(["Trạng thái cửa sổ"])},options:{normal:n=>{const{normalize:t}=n;return t(["Bình thường"])},minimized:n=>{const{normalize:t}=n;return t(["Thu gọn"])},maximized:n=>{const{normalize:t}=n;return t(["Mở rộng tối đa"])},fullscreen:n=>{const{normalize:t}=n;return t(["Toàn màn hình"])}}},incognito:{text:n=>{const{normalize:t}=n;return t(["Đặt làm cửa sổ ẩn danh"])},note:n=>{const{normalize:t}=n;return t(["Bạn cần bật 'Cho phép ở chế độ ẩn danh' cho tiện ích mở rộng này để sử dụng tùy chọn"])}}},"go-back":{name:n=>{const{normalize:t}=n;return t(["Quay lại"])},description:n=>{const{normalize:t}=n;return t(["Quay trở lại trang trước"])}},"forward-page":{name:n=>{const{normalize:t}=n;return t(["Về trước"])},description:n=>{const{normalize:t}=n;return t(["Đi tới trang tiếp theo"])}},"close-tab":{name:n=>{const{normalize:t}=n;return t(["Đóng tab"])},description:n=>{const{normalize:t}=n;return t([])},url:n=>{const{normalize:t}=n;return t(["URL hoặc match pattern"])},activeTab:n=>{const{normalize:t}=n;return t(["Đóng activeTab"])},allWindows:n=>{const{normalize:t}=n;return t(["Đóng tất cả các cửa sổ"])}},"event-click":{name:n=>{const{normalize:t}=n;return t(["Nhấp vào phần tử"])},description:n=>{const{normalize:t}=n;return t([])}},delay:{name:n=>{const{normalize:t}=n;return t(["Độ trễ"])},description:n=>{const{normalize:t}=n;return t(["Thêm độ trễ trước khi thực hiện khối tiếp theo"])},input:{title:n=>{const{normalize:t}=n;return t(["Độ trễ trong mili giây"])},placeholder:n=>{const{normalize:t}=n;return t(["(mili giây)"])}}},"parameter-prompt":{name:n=>{const{normalize:t}=n;return t(["Nhắc tham số"])}},"get-text":{name:n=>{const{normalize:t}=n;return t(["Trích văn bản"])},description:n=>{const{normalize:t}=n;return t(["Trích văn bản từ một phần tử"])},checkbox:n=>{const{normalize:t}=n;return t(["Chèn vào bảng"])},includeTags:n=>{const{normalize:t}=n;return t(["Bao gồm các thẻ HTML"])},prefixText:{placeholder:n=>{const{normalize:t}=n;return t(["Tiền tố văn bản"])},title:n=>{const{normalize:t}=n;return t(["Thêm tiền tố vào văn bản"])}},suffixText:{placeholder:n=>{const{normalize:t}=n;return t(["Hậu tố văn bản"])},title:n=>{const{normalize:t}=n;return t(["Thêm hậu tố vào văn bản"])}}},"export-data":{name:n=>{const{normalize:t}=n;return t(["Xuất dữ liệu"])},description:n=>{const{normalize:t}=n;return t(["Xuất dữ liệu của quy trình"])},exportAs:n=>{const{normalize:t}=n;return t(["Xuất file tại"])},refKey:n=>{const{normalize:t}=n;return t(["Khóa liên kết"])},bomHeader:n=>{const{normalize:t}=n;return t(["Thêm UTF-8 BOM"])},dataToExport:{placeholder:n=>{const{normalize:t}=n;return t(["Dữ liệu để xuất"])},options:{"data-columns":n=>{const{normalize:t}=n;return t(["Bảng"])},"google-sheets":n=>{const{normalize:t}=n;return t(["Google sheets"])},variable:n=>{const{normalize:t}=n;return t(["Biến"])}}}},"element-scroll":{name:n=>{const{normalize:t}=n;return t(["Cuộn"])},description:n=>{const{normalize:t}=n;return t([])},scrollY:n=>{const{normalize:t}=n;return t(["Cuộn thẳng"])},scrollX:n=>{const{normalize:t}=n;return t(["Cuộn ngang"])},intoView:n=>{const{normalize:t}=n;return t(["Scroll into view"])},smooth:n=>{const{normalize:t}=n;return t(["Cuộn mượt"])},incScrollX:n=>{const{normalize:t}=n;return t(["Cuộn ngang tăng dần"])},incScrollY:n=>{const{normalize:t}=n;return t(["Cuộn dọc tăng dần"])}},"new-tab":{name:n=>{const{normalize:t}=n;return t(["Tab mới"])},description:n=>{const{normalize:t}=n;return t([])},url:n=>{const{normalize:t}=n;return t(["URL tab mới"])},customUserAgent:n=>{const{normalize:t}=n;return t(["Sử dụng tác nhân người dùng tùy chỉnh"])},activeTab:n=>{const{normalize:t}=n;return t(["Đặt làm tab hoạt động"])},tabToGroup:n=>{const{normalize:t}=n;return t(["Thêm tab vào nhóm"])},waitTabLoaded:n=>{const{normalize:t}=n;return t(["Chờ cho đến khi tab được tải"])},updatePrevTab:{title:n=>{const{normalize:t}=n;return t(["Sử dụng tab mới đã mở trước đó thay vì tạo tab mới"])},text:n=>{const{normalize:t}=n;return t(["Cập nhật tab đã mở trước đó"])}}},link:{name:n=>{const{normalize:t}=n;return t(["Link"])},description:n=>{const{normalize:t}=n;return t(["Mở phần tử link"])}},"attribute-value":{name:n=>{const{normalize:t}=n;return t(["Giá trị thuộc tính"])},description:n=>{const{normalize:t}=n;return t(["Trích xuất giá trị từ một thuộc tính của phần tử"])},forms:{name:n=>{const{normalize:t}=n;return t(["Tên thuộc tính"])},checkbox:n=>{const{normalize:t}=n;return t(["Lưu dữ liệu"])},column:n=>{const{normalize:t}=n;return t(["Chọn cột"])},extraRow:{checkbox:n=>{const{normalize:t}=n;return t(["Thêm hàng bổ sung"])},placeholder:n=>{const{normalize:t}=n;return t(["Giá trị"])},title:n=>{const{normalize:t}=n;return t(["Giá trị của hàng phụ"])}}}},forms:{name:n=>{const{normalize:t}=n;return t(["Biểu mẫu"])},description:n=>{const{normalize:t}=n;return t([])},selected:n=>{const{normalize:t}=n;return t(["Đã chọn"])},type:n=>{const{normalize:t}=n;return t(["Loại biểu mẫu"])},getValue:n=>{const{normalize:t}=n;return t(["Trích xuất giá trị từ biểu mẫu"])},"text-field":{name:n=>{const{normalize:t}=n;return t(["Trường văn bản"])},value:n=>{const{normalize:t}=n;return t(["Giá trị"])},clearValue:n=>{const{normalize:t}=n;return t(["Xóa giá trị biểu mẫu"])},delay:{placeholder:n=>{const{normalize:t}=n;return t(["Độ trễ"])},label:n=>{const{normalize:t}=n;return t(["Nhập độ trễ (mili giây)(0 là vô hiệu hóa)"])}}},select:{name:n=>{const{normalize:t}=n;return t(["Select"])}},radio:{name:n=>{const{normalize:t}=n;return t(["Radio"])}},checkbox:{name:n=>{const{normalize:t}=n;return t(["Checkbox"])}}},"repeat-task":{name:n=>{const{normalize:t}=n;return t(["Nhiệm vụ lặp lại"])},description:n=>{const{normalize:t}=n;return t([])},times:n=>{const{normalize:t}=n;return t(["lần"])},repeatFrom:n=>{const{normalize:t}=n;return t(["Lặp lại từ"])}},"javascript-code":{name:n=>{const{normalize:t}=n;return t(["JavaScript code"])},description:n=>{const{normalize:t}=n;return t(["Thực thi code Javascript trong trang web"])},availabeFuncs:n=>{const{normalize:t}=n;return t(["Các hàm có sẵn:"])},removeAfterExec:n=>{const{normalize:t}=n;return t(["Xóa sau khi khối được thực thi"])},everyNewTab:n=>{const{normalize:t}=n;return t(["Thực thi mọi tab mới"])},context:{name:n=>{const{normalize:t}=n;return t(["Bối cảnh thực thi"])},items:{website:n=>{const{normalize:t}=n;return t(["Tab hoạt động"])},background:n=>{const{normalize:t}=n;return t(["Nền"])}}},modal:{tabs:{code:n=>{const{normalize:t}=n;return t(["JavaScript code"])},preloadScript:n=>{const{normalize:t}=n;return t(["Preload script"])}}},timeout:{placeholder:n=>{const{normalize:t}=n;return t(["Thời gian chờ"])},title:n=>{const{normalize:t}=n;return t(["Thời gian thực thi code Javascript"])}}},"trigger-event":{name:n=>{const{normalize:t}=n;return t(["Sự kiện kích hoạt"])},description:n=>{const{normalize:t}=n;return t([])},selectEvent:n=>{const{normalize:t}=n;return t(["Chọn sự kiện"])}},conditions:{name:n=>{const{normalize:t}=n;return t(["Điều kiện"])},add:n=>{const{normalize:t}=n;return t(["Thêm điều kiện"])},description:n=>{const{normalize:t}=n;return t(["Khối có điều kiện"])},retryConditions:n=>{const{normalize:t}=n;return t(["Thử lại nếu tất cả các điều kiện không được đáp ứng"])},refresh:n=>{const{normalize:t}=n;return t(["Làm mới các kết nối điều kiện"])},fallbackTitle:n=>{const{normalize:t}=n;return t(["Thực thi khi tất cả các phép so sánh không đáp ứng yêu cầu"])},equals:n=>{const{normalize:t}=n;return t(["Ngang bằng"])},gt:n=>{const{normalize:t}=n;return t(["Lớn hơn"])},gte:n=>{const{normalize:t}=n;return t(["Lớn hơn hoặc ngang bằng"])},lt:n=>{const{normalize:t}=n;return t(["Nhỏ hơn"])},lte:n=>{const{normalize:t}=n;return t(["Nhỏ hơn hoặc ngang bằng"])},ne:n=>{const{normalize:t}=n;return t(["Không bằng"])},contains:n=>{const{normalize:t}=n;return t(["Bao hàm"])}},"element-exists":{name:n=>{const{normalize:t}=n;return t(["Phần tử tồn tại"])},description:n=>{const{normalize:t}=n;return t(["Kiểm tra xem một phần tử có tồn tại không"])},selector:n=>{const{normalize:t}=n;return t(["Bộ chọn phần tử"])},fallbackTitle:n=>{const{normalize:t}=n;return t(["Thực thi khi phần tử không tồn tại"])},throwError:n=>{const{normalize:t}=n;return t(["Ném lỗi nếu không tồn tại"])},tryFor:{title:n=>{const{normalize:t}=n;return t(["Cố gắng kiểm tra xem phần tử có tồn tại không"])},label:n=>{const{normalize:t}=n;return t(["Số lần thử"])}},timeout:{label:n=>{const{normalize:t}=n;return t(["Giới hạn thời gian (mili giây)"])},title:n=>{const{normalize:t}=n;return t(["Thời gian cho mỗi lần thử"])}}},webhook:{name:n=>{const{normalize:t}=n;return t(["Webhook"])},description:n=>{const{normalize:t}=n;return t(["Webhook cho phép dịch vụ bên ngoài được thông báo"])},url:n=>{const{normalize:t}=n;return t(["The Post receive URL"])},contentType:n=>{const{normalize:t}=n;return t(["Chọn một loại nội dung"])},method:n=>{const{normalize:t}=n;return t(["Yêu cầu phương thức"])},fallback:n=>{const{normalize:t}=n;return t(["Thực thi khi không thành công hoặc lỗi khi thực hiện một yêu cầu HTTP"])},buttons:{header:n=>{const{normalize:t}=n;return t(["Thêm header"])}},timeout:{placeholder:n=>{const{normalize:t}=n;return t(["Thời gian chờ"])},title:n=>{const{normalize:t}=n;return t(["Thời gian chờ thực hiện yêu cầu Http(ms)"])}},tabs:{headers:n=>{const{normalize:t}=n;return t(["Headers"])},body:n=>{const{normalize:t}=n;return t(["Nội dung"])},response:n=>{const{normalize:t}=n;return t(["Phản hồi"])}}},"while-loop":{name:n=>{const{normalize:t}=n;return t(["Trong khi lặp lại"])},description:n=>{const{normalize:t}=n;return t(["Thực thi các khối khi điều kiện được đáp ứng"])},editCondition:n=>{const{normalize:t}=n;return t(["Chỉnh sửa điều kiện"])},fallback:n=>{const{normalize:t}=n;return t(["Thực thi khi điều kiện sai"])}},"loop-elements":{name:n=>{const{normalize:t}=n;return t(["Yếu tố vòng lặp"])},description:n=>{const{normalize:t}=n;return t(["Lặp lại qua các phần tử"])},loadMore:n=>{const{normalize:t}=n;return t(["Tải thêm các phần tử"])},scrollToBottom:n=>{const{normalize:t}=n;return t(["Cuộn xuống dưới cùng"])},actions:{none:n=>{const{normalize:t}=n;return t(["Không có"])},"click-element":n=>{const{normalize:t}=n;return t(["Nhấp vào một phần tử để tải thêm"])},scroll:n=>{const{normalize:t}=n;return t(["Cuộn xuống để tải thêm"])},"click-link":n=>{const{normalize:t}=n;return t(["Nhấp vào liên kết để tải thêm"])}}},"loop-data":{name:n=>{const{normalize:t}=n;return t(["Dữ liệu vòng lặp"])},description:n=>{const{normalize:t}=n;return t(["Lặp lại qua các cột dữ liệu hoặc dữ liệu tùy chỉnh của bạn"])},loopId:n=>{const{normalize:t}=n;return t(["ID Vòng lặp"])},refKey:n=>{const{normalize:t}=n;return t(["Khóa liên kết"])},startIndex:n=>{const{normalize:t}=n;return t(["Bắt đầu từ chỉ mục"])},resumeLastWorkflow:n=>{const{normalize:t}=n;return t(["Tiếp tục quy trình làm việc cuối cùng"])},reverse:n=>{const{normalize:t}=n;return t(["Thứ tự vòng lặp đảo ngược"])},modal:{fileTooLarge:n=>{const{normalize:t}=n;return t(["Tệp quá lớn để chỉnh sửa"])},maxFile:n=>{const{normalize:t}=n;return t(["Kích thước tệp tối đa là 1MB"])},options:{firstRow:n=>{const{normalize:t}=n;return t(["Use the first row as keys"])}}},buttons:{clear:n=>{const{normalize:t}=n;return t(["Xóa dữ liệu"])},insert:n=>{const{normalize:t}=n;return t(["Chèn dữ liệu"])},import:n=>{const{normalize:t}=n;return t(["Nhập tệp"])}},maxLoop:{title:n=>{const{normalize:t}=n;return t(["Số lượng dữ liệu tối đa để lặp lại"])},label:n=>{const{normalize:t}=n;return t(["Dữ liệu tối đa cho vòng lặp (0 là vô hiệu hóa)"])}},loopThrough:{placeholder:n=>{const{normalize:t}=n;return t(["Lặp lại"])},fromNumber:n=>{const{normalize:t}=n;return t(["Từ số"])},toNumber:n=>{const{normalize:t}=n;return t(["Đến số"])},options:{numbers:n=>{const{normalize:t}=n;return t(["Số liệu"])},variable:n=>{const{normalize:t}=n;return t(["Biến"])},"data-columns":n=>{const{normalize:t}=n;return t(["Cột dữ liệu"])},table:n=>{const{normalize:t}=n;return t(["Bảng"])},"custom-data":n=>{const{normalize:t}=n;return t(["Dữ liệu tùy chỉnh"])},"google-sheets":n=>{const{normalize:t}=n;return t(["Google sheets"])},elements:n=>{const{normalize:t}=n;return t(["Các yếu tố"])}}}},"loop-breakpoint":{name:n=>{const{normalize:t}=n;return t(["Điểm ngắt vòng lặp"])},description:n=>{const{normalize:t}=n;return t(["Để cho biết khối dữ liệu vòng lặp phải dừng ở đâu"])}},"take-screenshot":{name:n=>{const{normalize:t}=n;return t(["Chụp màn hình"])},fullPage:n=>{const{normalize:t}=n;return t(["Chụp ảnh màn hình toàn trang"])},description:n=>{const{normalize:t}=n;return t(["Chụp màn hình của tab đang hoạt động"])},imageQuality:n=>{const{normalize:t}=n;return t(["Chất lượng hình ảnh"])},saveToColumn:n=>{const{normalize:t}=n;return t(["Chèn ảnh chụp màn hình vào bảng"])},saveToComputer:n=>{const{normalize:t}=n;return t(["Lưu ảnh chụp màn hình vào máy tính"])},types:{title:n=>{const{normalize:t}=n;return t(["Chụp ảnh màn hình của"])},page:n=>{const{normalize:t}=n;return t(["Trang"])},fullpage:n=>{const{normalize:t}=n;return t(["Toàn trang"])},element:n=>{const{normalize:t}=n;return t(["Một yếu tố"])}}},"switch-to":{name:n=>{const{normalize:t}=n;return t(["Chuyển đổi frame"])},description:n=>{const{normalize:t}=n;return t(["Chuyển đổi giữa cửa sổ chính và iframe"])},iframeSelector:n=>{const{normalize:t}=n;return t(["Bộ chọn phần tử Iframe"])},windowTypes:{main:n=>{const{normalize:t}=n;return t(["Cửa sổ chính"])},iframe:n=>{const{normalize:t}=n;return t(["Iframe"])}}}}}}}}]);
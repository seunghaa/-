//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.

var HTMLName = '<div>%data%</div>',
    HTMLAge = '<div>%data%</div>',
    HTMLEducation = '<div>%data%</div>',
    HTMLMajor = '<div>%data%</div>',
    HTMLPhone = '<div>%data%</div>',
    HTMLEmail = '<div>%data%</div>',
    HTMLAddress = '<div>%data%</div>',
    HTMLDescription = '<div>%data%</div>';


//자기소개에 필요한 정보를 담았다.
//필요에 따라 추가해도 좋다.

var model = {
  name: "김승하",
  age: "1995.3.13",
  education: "건국대학교",
  major: "부동산학과 컴퓨터공학(다전공)",
  phone: "01053928848",
  email: "ksha313@gmail.com",
  address: "서울시 송파구 양산로8길 24, 207-1201",
  description: "안녕하세요 멋쟁이 사자처럼5기 김승하입니다.",

  display: function (){
    
    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewName = HTMLName.replace("%data%", model.name);
    var NewAge = HTMLAge.replace("%data%", model.age);
    var NewEducation=HTMLEducation.replace("%data%",model.education);
    var NewMajor=HTMLMajor.replace("%data%",model.major);
    var NewPhone=HTMLPhone.replace("%data%",model.phone);
    var NewEmail=HTMLEmail.replace("%data%",model.email);
    var NewDescription=HTMLDescription.replace("%data%",model.description);
    var NewAddress=HTMLAddress.replace("%data%",model.address);


    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.
    $('.modal-body').append(NewName);
    $('.modal-body').append(NewAge);
    $('.modal-body').append(NewMajor);
    $('.modal-body').append(NewEducation);
    $('.modal-body').append(NewAddress);
    $('.modal-body').append(NewPhone);
    $('.modal-body').append(NewEmail);
    $('.modal-body').append(NewDescription);
    
  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function contoller(){
  model.display();
}

contoller();

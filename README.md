# THEPIRATES
## 필요 라이브러리 설치
- jQuery 설치 방법은 다운로드 혹은 CDN을 이용하여 사용할 수 있습니다.
   
 https://jquery.com/download/ 에서 직접 다운로드 받은후 코드로 불러올 수 있습니다.
 ```
<head>
    <script src="경로 및 jQuery파일명"></script>
</head>
 ```
 
 다음은 Node.js를 이용한 npm 방법입니다. yarn을 이용 해도 되지만 npm을 예제로 들겠습니다.
 ```
$ npm install jquery
 ```
 다음은 설치 없이 CDN을 이용해서 바로 사용 하는 방법입니다. 해당 코드를 삽입하면 jQuery를 사용 할 수 있습니다!
 ```
 <head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
 ```
 jQuery의 기본적인 사용 방법은 https://www.w3schools.com/jquery/jquery_get_started.asp 에서 확인 할 수 있습니다.
 
 
 
 ## Swiper API
 - 가게 상세 페이지 구현에서 이미지 슬라이드를 위한 Swiper API를 이용했습니다.
   Swiper API 또한 다운로드 혹은 CDN를 이용하여 설치 할 수 있습니다.
   
   https://unpkg.com/browse/swiper@6.3.3/ 에서 직접 다운로드 받아 코드로 불러올 수 있습니다.
  ```
<head>
    <script src="경로 및 Swiper.js 파일명"></script>
</head>
   ```
   npm을 이용해서 설치 하는 방법입니다.
   ```
   $ npm install swiper
   ```
   CDN 이용 방법입니다.
   ```
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
   ```
   
## 구동 가이드
- https://daisy0y.github.io/THEPIRATES/ 에서 웹 페이지를 확인할 수 있습니다.  

![main](https://user-images.githubusercontent.com/61371367/95678729-80cba200-0c09-11eb-9be4-8cdd5b14fa8c.jpg)


페이지를 열었을때 확인 할 수 있는 메인 페이지입니다.

![header](https://user-images.githubusercontent.com/61371367/95678853-28e16b00-0c0a-11eb-9537-6756727ac3fc.jpg)


웹페이지의 header의 메뉴 영역입니다. 메인페이지를 구현하였기 때문에 해당 배너들을 클릭하여도 이동하지 않습니다.
   
![rollingbanner](https://user-images.githubusercontent.com/61371367/95678950-c472db80-0c0a-11eb-9143-eddd595ccfd0.jpg)

header의 롤링배너 영역입니다. JSON에서 데이터를 가져와 배너에 추가되도록 하였고 배너를 드랍다운 했을때는 롤링하지 않습니다.
롤링은 1초간격으로 진행됩니다. 링크 클릭시 실제 해당 상점 페이지로 이동합니다.

![filter](https://user-images.githubusercontent.com/61371367/95679091-96da6200-0c0b-11eb-854a-41c3bdfb50e5.jpg)


header의 filter메뉴 입니다. 모든메뉴와 생선/횟감 베뉴를 클릭시 전체보기가 활성화 됩니다. 

![search](https://user-images.githubusercontent.com/61371367/95679175-fd5f8000-0c0b-11eb-9e1e-d9d605ec9ebf.jpg)


header의 검색메뉴 입니다. 영역만 구성하여 실제 검색이 되지 않습니다.


![scroll](https://user-images.githubusercontent.com/61371367/95679299-c76ecb80-0c0c-11eb-887e-ccb2c74db01d.jpg)


메인페이지의 가게 영역입니다. 스크롤을 내리면 JSON 데이터를 조회해서 화면에 렌더링 합니다. 해당 아이템 클릭시 실제 가게페이지로 이동합니다.
실제 사이트와 이미지 데이터가 달라 크롭되어 보여지게 했습니다.

![detail](https://user-images.githubusercontent.com/61371367/95679365-3f3cf600-0c0d-11eb-8a62-ffeebc191900.jpg)


메인페이지 왼쪽 상단에 있는 가게상세페이지구현 버튼을 누르면 이동하는 상세페이지 구현화면 입니다.
가게영역의 데이터는 JSON에서 랜더링되어 따로 버튼을 구현했습니다.


![detail2](https://user-images.githubusercontent.com/61371367/95679403-904cea00-0c0d-11eb-91ad-867e6fb29e8c.jpg)

실제 데이터 없이 퍼블리싱한 페이지입니다. 가게 상세 정보 / 시세 정보  / 메뉴 정보 / 가게 컨텐츠 정보로 구성했으며 탐방기 / 댓글 / 위치중 탐방기만 구현했습니다.


# KW Bus

인덕원역과 학교 정문 사이 교내버스의 출발 예정 시각을 확인하는 모바일 우선 웹 앱입니다.

<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/d2d90f1d-eb66-4ee9-b874-132890a8dd65" />


## 주요 기능

- 인덕원역 → 학교 정문, 학교 정문 → 인덕원역 방향별 출발 카운트다운
- 현재 출발편과 다음 출발편 표시
- 각 정류장 위치를 카카오맵으로 표시
- 시간표 정보를 60초마다 새로 확인하고, 브라우저 탭으로 돌아오면 즉시 갱신
- 서비스 개선 의견 제출 링크

> 이 페이지는 차량 GPS를 추적하는 실시간 위치 서비스가 아닙니다. 저장된 시간표를 기준으로 다음 출발까지 남은 시간을 계산합니다. 운행 시간은 `src/app/api/bus-timetable/constants.ts`에서 관리하며, 시간표가 바뀌면 이 파일도 함께 갱신해야 합니다.

## 기술 스택

- Next.js 15 (App Router), React 19
- Tailwind CSS 4
- Kakao Maps JavaScript SDK
- Luxon (한국 시간 기준 시각 계산)
- Vercel Analytics

## 시작하기

필요한 도구: Node.js와 npm.

```bash
git clone https://github.com/whoisapple/kwbus.k-r.kr.git
cd kwbus.k-r.kr
npm install
npm run dev
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)을 엽니다.

프로덕션 빌드는 다음과 같이 만들고 실행할 수 있습니다.

```bash
npm run build
npm start
```

## 시간표와 경로

- `src/app/api/bus-timetable/constants.ts`: 방향별 출발 시각
- `src/app/api/bus-timetable/utils.ts`: Asia/Seoul 시간대 기준 남은 시간 계산
- `src/app/api/bus-timetable/indukwon` 및 `school`: 방향별 시간표 API
- `src/app/page.js`: 카운트다운과 지도 화면

운행 일정은 학기·요일·휴일에 따라 달라질 수 있으므로, 실제 이용 전 공지된 시간표를 확인하세요. 배포 도메인에서 지도를 표시하려면 Kakao Maps JavaScript SDK 키와 도메인 설정이 유효해야 합니다.

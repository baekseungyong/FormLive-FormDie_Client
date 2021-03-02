import { StyleSheet, Font } from "@react-pdf/renderer";
// @react-pdf/renderer에서 css는 자바스크립트로 이루어져 있습니다.
// 저희가 배웠던 css와는 다른 문법입니다.
//  라이브러리에서 사용하는 고유한 css 문법이 따로 있어 다음과 같이 적용했습니다.
//  StyleSheet를 사용하여 css를 적용하는 것을 볼수 있고 margin-left가 아닌 marginLeft와 같이 camelCase 형식의 이름으로 되어 있고 객체 형식으로 selector 이름을 적용하고 있습니다.
Font.register({
	family: "YoonGothic",
	src: "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
});

export const styles = StyleSheet.create({
	viewer: {
		position: "relative",
		width: 840,
		height: "100%",
	},
	image: {
		marginLeft: -30,
		marginTop: -50,
		position: "relative",
	},
	text__name: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 180,
		top: 211,
		width: 110,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__birthday: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 180,
		top: 236.5,
		width: 110,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__numbers: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 180,
		top: 260.5,
		width: 110,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		color: "#8c8c8c",
		fontSize: 10,
	},
	text__position: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 180,
		top: 285.5,
		width: 110,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__gender: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 370,
		top: 211,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__email: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 370,
		top: 235.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__company: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 370,
		top: 260.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__job: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 370,
		top: 285.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__service__start__year1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 124.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__start__month1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 143,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__start__date1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 160,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__year1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 188,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__month1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 206,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__date1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 319,
		left: 223.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__start__year2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 156.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__start__month2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 175.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__start__date2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 192.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__year2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 220.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__month2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 238.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__service__end__date2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 256,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__job__start__year: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 341.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__job__start__month: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 360.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__job__start__date: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 339,
		left: 377.5,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 8,
		color: "#8c8c8c",
	},
	text__academic__year1:{
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 368,
		left: 46,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__academic__year2:{
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 387.7,
		left: 46,
		width: 150,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__academic__school:{
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 366,
		left: 150,
		width: 40,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 13,
		color: "#8c8c8c",
	},
	text__academic__university:{
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 387.7,
		left: 147,
		width: 40,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__academic__university_department:{
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 387.7,
		left: 220,
		width: 40,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__academic__grade1: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 368.1,
		left: 280,
		width: 40,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__academic__grade2: {
		fontFamily: "YoonGothic",
		position: "absolute",
		top: 388,
		left: 280,
		width: 40,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__sign__year: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 370,
		top: 598,
		width: 100,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__sign__month: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 412,
		top: 598,
		width: 100,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__sign__day: {
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 442,
		top: 598,
		width: 100,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 10,
		color: "#8c8c8c",
	},
	text__sign__name:{
		fontFamily: "YoonGothic",
		position: "absolute",
		left: 355,
		top: 614,
		width: 100,
		height: 24,
		textAlign: "center",
		paddingTop: 5,
		fontSize: 11,
		color: "#8c8c8c",
	},
	checkImg__military1: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 323.5,
		left: 113.5,
	},
	checkImg__military2: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 323.5,
		left: 333.5,
	},
	checkImg__military3: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 323.5,
		left: 392.5,
	},
	checkImg__military4: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 323.5,
		left: 45.5,
	},
	checkImg__military5: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 343.5,
		left: 113.5,
	},
	checkImg__academic1: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 373.5,
		left: 339,
	},
	checkImg__academic2: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 373.5,
		left: 392.5,
	},
	checkImg__academic3: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 373.5,
		left: 467.5,
	},
	checkImg__academic4: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 394,
		left: 339,
	},
	checkImg__academic5: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 394,
		left: 392.5,
	},
	checkImg__academic6: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 394,
		left: 467.5,
	},
	checkImg__school1: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 367,
		left: 188,
	},
	checkImg__school2: {
		width: 8,
		height: 8,
		position: "absolute",
		top: 367,
		left: 205,
	}
});

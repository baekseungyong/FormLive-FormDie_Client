import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SUGGESTION_UPLOAD_REQUEST } from "../reducers/suggestion";
import styles from "../styles/Suggestion/Suggestion.module.css";
import Head from "next/head";

const Suggestion = () => {
	const { handleSubmit, register } = useForm();
	const dispatch = useDispatch();
	const [fileName, setFileName] = useState<string>("");
	const onChange = (e) => {
		setFileName(e.target.files[0].name);
	};
	/*
	 * AJAX로 서버에 파일 전송을 위해 FormData 객체를 사용하여 파일을 전송하였습니다.
	 * 이 때, 헤더는 "Content-Type": "multipart/form-data"로 설정해야 전송이 가능합니다.
	 * FormData는 XMLHttpRequest 전송을 위해 설계된 특수한 객체 형태여서 console.log를 사용하여 확인할 수 없고 keys와 values를 사용하여 내용을 확인할 수 있습니다.
	 * input type="file" 설정 시 name을 지정하여 파일을 읽어올 수 있습니다.
	 */
	const onSubmit = (fileData, event) => {
		event.preventDefault();
		const frm = new FormData();
		frm.append("doc", fileData.upload[0]);
		frm.append("title", fileData.title);
		dispatch({ type: SUGGESTION_UPLOAD_REQUEST, data: frm });
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>양식당 ｜ Suggestion</title>
				<link rel="shortcut icon" href="/image/favicon.ico" />
			</Head>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div>양식당, 이 양식을 요청합니다.</div>
				<div>(양식 제안하기)</div>
				<div>'폼' 혹은 '폼 그룹' 제목과 서식 파일을 업로드해주세요.</div>
				<div>파일은 한글(hwp), 워드(doc), 캡처한 이미지 모두 가능합니다.</div>
				<input
					ref={register}
					type="text"
					name="title"
					placeholder="TITLE, PLEASE"
					className={styles.title}
				/>
				<div className={styles.fileUpload}>
					<div className={styles.files}>
						<input
							value={fileName}
							placeholder="FILE UPLOAD"
							disabled
							className={styles.fileName}
						/>
						<label className={styles.uploadImg}>
							<img src="/image/file-upload-solid.svg" />
							<input
								ref={register}
								type="file"
								name="upload"
								required
								onChange={onChange}
							/>
						</label>
					</div>

					<input type="submit" value="SUBMIT" className={styles.submit} />
				</div>
				<div>
					제안해주신 문서는 검토 후에 반영됩니다. 제안해주셔서 감사합니다.
				</div>
			</form>
		</div>
	);
};

export default Suggestion;

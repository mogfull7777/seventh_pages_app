import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row, Table} from "react-bootstrap";

const News = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {

        const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-24&sortBy=publishedAt&apiKey=4d991139f4ef4bcc8dc6cff0c1b0a93d";

        try {

            const article = await axios.get(address);

            setNews(article.data.articles);

        } catch (err) {
            console.log(err);
        }

    // if (setNews) {
    //     return null;
    // }

    };


    useEffect(() => {
        getNews()
    }, [])

    return (
        <Container>
            <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>기사 제목</th>
                        <th>기자</th>
                        <th>기사 내용</th>
                        <th>더보기</th>
                    </tr>
                    </thead>
                    {news && news.map(n => (
                        <tbody>
                        <tr>
                            {/*<td>{n.title === null*/}
                            {/*    ? "타이틀 없음"*/}
                            {/*    : n.title.slice(0, 10)}</td>*/}
                            <td>{n.title.slice(0, 10)}</td>
                            <td>{n.author}</td>
                            <td>{n.content.slice(0, 30)}</td>
                            <td>{n.url}</td>
                        </tr>
                        </tbody>
                    ))}
                </Table>
            </Row>
        </Container>
    );
};

export default News;

// 1. null에 할당값을 넣으려고 했으나 실패.
// 2. api에 articles.title을 분석??
// 3. 함수로서 slice() 에 대해 서치
// 4. 스크립트 로드 우선순위가 잘못되었거나, 로드가 되지 않았거나, 스크립트가 로드될 당시 페이지에 아이디나 클래스에 해당하는 요소가 없거나 한 경우.

//
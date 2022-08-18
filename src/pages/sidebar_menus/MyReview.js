/** 
 * @Filename: MyReview.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 사이드바의 내 리뷰 메뉴 페이지 
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import ReivewItem from "../../components/items/ReivewItem";
import { useSelector, useDispatch } from "react-redux";
import { getMyReviewList } from "../../slices/MyReviewSlice";

const MyReviewContainer = styled.div`
    width: 80%;
    margin: auto;
`;

const MyReview = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.myReview);
    
    /**컴폰너트 마운트될때 현재 로그인계정이 작성한 리뷰글 목록데이터 repatch */
    useEffect(()=>{
        dispatch(getMyReviewList());
    },[])

    return (
        <MyReviewContainer>
            <h1>내 리뷰</h1>
            <ul>
                {
                    data?.item.map((v,i)=>{
                        console.log(v);
                        // <ReivewItem item={v}></ReivewItem>
                    })
                }
                <ReivewItem></ReivewItem>
                <ReivewItem></ReivewItem>
            </ul>
        </MyReviewContainer>
    );
};

export default MyReview;

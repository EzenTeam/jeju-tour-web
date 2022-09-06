/** 
 * @Filename: ListDetail.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 리스트 클릭 시 보여질 상세페이지
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useAxios from 'axios-hooks';
import ReviewItem from '../../components/items/ReviewItem';
import Heart from '../../components/Heart';


const DetailContainer=styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 80%;
    margin: auto;
`;

const ListDetail = () => {
    const location = useLocation();
    const { item } = location.state;

    let ref_id;
    let ref_type;
    
    if(item.place_no){
        ref_id = item.place_no;
        ref_type = 'place';
    }else if(item.accom_no){
        ref_id = item.accom_no;
        ref_type = 'accom';
    }else if(item.food_no){
        ref_id = item.food_no;
        ref_type = 'food';
    }
    
    /**컴포너트 마운트될때 해당 여행지(place_no/accom_no/food_no)에 등록된 리뷰글 목록 get요청 자동실행 */
    const [{data,loading,error},refetch] = useAxios({
        url:`/reviews/${ref_type}/${ref_id}`,
        method:'GET'
    },{useCache:false});
    // console.log(data.item);

    return (
        <DetailContainer>
            {/* 좋아요버튼 : 로그인 상태인 경우에만 렌더링 */}
            {/* <Heart ref_id={ref_id} ref_type={ref_type}></Heart> */}
            <h1>{item.title}</h1>
            <h1>{item.introduction}</h1>
            <h1>{item.address}</h1>
            <h1>{item.tag}</h1>
            {/* <h3 className="font3">유의사항</h3>
            <div className="font4">
                ※ 위 정보는 {item.edit_date}에 작성된 정보로, 이후 변경될 수 있으니 여행 하시기 전에 반드시 확인하시기 바랍니다.
                ※ 위 콘텐츠에 사용된 텍스트, 사진, 동영상 등의 정보는 제주관광공사가 저작권을 보유하고 있으므로 콘텐츠의 무단 사용을 금합니다.
            </div> */}
            <hr/>            
            <div className='review_wrap'>
                {
                    data && (
                        data.item.map((v,i)=>
                            <ReviewItem key={i} item={v}></ReviewItem>
                        )
                    )
                }
            </div>    
        </DetailContainer>
    );
};

export default ListDetail;
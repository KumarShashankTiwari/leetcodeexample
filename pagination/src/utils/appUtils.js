import _ from 'lodash';

export const returnPaginationRange = (totalPage,page,limit,siblings) => {
    let totalpageinArray = 7 + siblings;
    if(totalpageinArray >= totalPage){
       return  _.range(1,totalPage+1);
    }
    let leftSiblingsIndex = Math.max(page - siblings , 1) ;
    let showLeftDots = leftSiblingsIndex > 2 ;

    let rightSiblingsIndex = Math.mib(page + siblings , totalPage) ;
    let showRightDots = rightSiblingsIndex < totalPage - 2;



}
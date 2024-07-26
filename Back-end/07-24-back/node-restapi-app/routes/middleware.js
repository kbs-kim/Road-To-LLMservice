//exports.함수명은 해당 모듈파일에서 여러개의 재사용가능한 함수의 기능을 바로
//외부에서 사용할 수 있게 노출합니다.



//사용자 요청URL을 분석해서
//파라메터 방식으로 값이 전달된 경우 특정 파라메터 값을 추출해서
//비지니스 로직을 처리를 적용한다.
//http://localhost:3000/articles/1
//http://localhost:3000/api/articles/1
exports.checkParams =(req,res,next)=>{

    if(req.parmas.id==undefinded){
        console.log("id 파라메터가 존재하지 않습니다.");
    }else{
        console.log("id 파라메터 값:",req.parmas.id);
    }


}


//사용자 요청 URL을 분석해서
//쿼리스트링 방식으로 값이 전달된경우 특정 키값을 추출해서
//비지니스 로직을 처리를 적용한다.
exports.checkQuery = (req,res, next)=>{
    if(req.query.category==undefined){
        console.log("category키 값이 전달되지 않았습니다.")
    }
    next();
    


}
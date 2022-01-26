$(function(){
        // 初始化右侧滚动条
        // 这个方法定义在scroll.js中
        resetui();
        //为发送按钮绑定点击事件
        $('#btn').on('click',function(){
            var text = $('#ipt').val().trim();
            if(text.length <= 0) return $('#ipt').val('');
            $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>');
            $('#ipt').val('');
            //重置滚动条位置
            resetui();
            //发起请求，获取数据
            getMsg(text);
        })
        function getMsg(text) {
            $.ajax({
                method:'GET',
                url:'http://www.tuling123.com/openapi/api',
                dataType: 'json',
                data: {
                    key:"758ecd943dd644b59ff2d1f73759500d",//APIKey
                    info:text//用户文本
                },
                success: function(res) {console.log(res);
                    if(res.code != "100000") return alert('获取信息失败');
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>'+res.text+'</span></li>');
                    resetui();
                }
            })
        }
        $('#ipt').on('keyup',function(e){
            if(e.keyCode == 13) {
                $('#btn').click();
            }
        })
      })
			window.onload=function(){
				//获取两个ul元素中的li元素
			var imgLis=document.getElementById('img').getElementsByTagName('li');
			var orderLis=document.getElementById('order').getElementsByTagName('li');
			
			//声明循环计数变量
			var xh=null;
			
			//设定播放函数
			/*
				no  播放的张数
			*/
			function play(no,stopXh){
				//alert(stopXh);
				//判断是否是手动播放
				if(stopXh===false){
					clearInterval(xh);
					xh=null;
				}
				
			
				//将制定的li显示 剩下的li都隐藏 
				for(var i=0;i<imgLis.length;i++){
					//判断是否是要显示的内容
					if(i==no){//是 添加on属性
						imgLis[i].className='on';
						orderLis[i].className='on';
					}else{//不是 去掉on属性
						imgLis[i].className='';
						orderLis[i].className='';
					}	
				
				}

			}
			
			
			//实现自动播放功能
			function autoPlay(num){
				//定义计数变量
				//var num=0;
				
				//检测数值是否正确
				if(num>=4){
					num=0;
				}
				//循环播放
				xh=setInterval(function(){
					//调用播放功能
					play(num);
					//播放完毕，将计数变量num增加
					num++;
					//检测num值是否大于最大图片值，如果大于则归0
					if(num>=imgLis.length){
						num=0;
					}
				
				},2000);
				
			
			}
			//开始自动播放
			autoPlay(0);
			
			//实现手动播放功能
			//为所有的order中的li序号添加
			for(var i=0;i<orderLis.length;i++){
				//将当前的序号保存在对应的li中(自定义的index属性)
				orderLis[i].index=i;
			
				//添加鼠标点击事件，播放制定幻灯片
				orderLis[i].onmousedown=function(){
					//播放制定的图片
					//参数1:序号
					play(this.index,false);

				
				}
				//添加鼠标移除事件，开始自动播放
				orderLis[i].onmouseup=function(){
					//开启自动播放（将当前幻灯片的下一张片的下标传入）
					autoPlay(this.index+1)
				}
				
			}
			
			}
			
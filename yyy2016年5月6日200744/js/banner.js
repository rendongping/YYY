			window.onload=function(){
				//��ȡ����ulԪ���е�liԪ��
			var imgLis=document.getElementById('img').getElementsByTagName('li');
			var orderLis=document.getElementById('order').getElementsByTagName('li');
			
			//����ѭ����������
			var xh=null;
			
			//�趨���ź���
			/*
				no  ���ŵ�����
			*/
			function play(no,stopXh){
				//alert(stopXh);
				//�ж��Ƿ����ֶ�����
				if(stopXh===false){
					clearInterval(xh);
					xh=null;
				}
				
			
				//���ƶ���li��ʾ ʣ�µ�li������ 
				for(var i=0;i<imgLis.length;i++){
					//�ж��Ƿ���Ҫ��ʾ������
					if(i==no){//�� ���on����
						imgLis[i].className='on';
						orderLis[i].className='on';
					}else{//���� ȥ��on����
						imgLis[i].className='';
						orderLis[i].className='';
					}	
				
				}

			}
			
			
			//ʵ���Զ����Ź���
			function autoPlay(num){
				//�����������
				//var num=0;
				
				//�����ֵ�Ƿ���ȷ
				if(num>=4){
					num=0;
				}
				//ѭ������
				xh=setInterval(function(){
					//���ò��Ź���
					play(num);
					//������ϣ�����������num����
					num++;
					//���numֵ�Ƿ�������ͼƬֵ������������0
					if(num>=imgLis.length){
						num=0;
					}
				
				},2000);
				
			
			}
			//��ʼ�Զ�����
			autoPlay(0);
			
			//ʵ���ֶ����Ź���
			//Ϊ���е�order�е�li������
			for(var i=0;i<orderLis.length;i++){
				//����ǰ����ű����ڶ�Ӧ��li��(�Զ����index����)
				orderLis[i].index=i;
			
				//���������¼��������ƶ��õ�Ƭ
				orderLis[i].onmousedown=function(){
					//�����ƶ���ͼƬ
					//����1:���
					play(this.index,false);

				
				}
				//�������Ƴ��¼�����ʼ�Զ�����
				orderLis[i].onmouseup=function(){
					//�����Զ����ţ�����ǰ�õ�Ƭ����һ��Ƭ���±괫�룩
					autoPlay(this.index+1)
				}
				
			}
			
			}
			
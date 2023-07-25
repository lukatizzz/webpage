    var overlay=document.getElementById('site-bar-ovelay');
    var btn_close=document.getElementById('menu-close');
    var btn_open=document.getElementById('buttn-nav__mobile');
    var btn_open_navmenu=document.getElementById('btn-nav__menu');
    btn_close.onclick = function() {
        overlay.style.display="none";
    }
    
    btn_open.onclick= function(){
        overlay.style.display="block";
    }
    btn_open_navmenu.onclick= function(){
        overlay.style.display="block";
    }
     //lấy biến tên đò uong
    var Drink1=document.getElementById('Drink1');
    var Drink2=document.getElementById('Drink2');
    var Drink3=document.getElementById('Drink3');
    var Drink4=document.getElementById('Drink4');
    var Drink5=document.getElementById('Drink5');
    var Drink6=document.getElementById('Drink6');
    var Drink7=document.getElementById('Drink7');
    var Drink8=document.getElementById('Drink8');
     //lay gia do uong do
    var Price1=document.getElementById('Price1');
    var Price2=document.getElementById('Price2');
    var Price3=document.getElementById('Price3');
    var Price4=document.getElementById('Price4');
    var Price5=document.getElementById('Price5');
    var Price6=document.getElementById('Price6');
    var Price7=document.getElementById('Price7');
    var Price8=document.getElementById('Price8');


   
    

    //bien chua text
    var  Name_Drink_Text=[];

    var Name_Drink=document.getElementById('Name_Drink');
    var TongGia=document.getElementById('TongGia');
    




     //khi nhấn vào bàn sẽ khởi tạo đối tượng oder
  function Order() {
    this.foodItems = [];
    this.totalPrice = 0;
  }
   Order.prototype.addFoodItem = function(foodItem) {
    this.foodItems.push(foodItem);
    this.totalPrice += foodItem.price;
  };

  Order.prototype.removeFoodItem = function(foodItem) {
    var index = this.foodItems.indexOf(foodItem);
    if (index !== -1) {
      var removedItem = this.foodItems.splice(index, 1)[0];
      this.totalPrice -= removedItem.price;
      console.log("Đã xóa món ăn: " + removedItem.name);
    } else {
      console.log("Món ăn không tồn tại trong đơn hàng.");
    }
  };
  var order=new Order;
  var SoBan
  // xóa oder và đưa oder mới khi nhấn vào bàn
  function newOder(x){
    
   
    if(order!=null){
      order.foodItems=[];
      order.totalPrice=0;

    }
    Name_Drink.innerHTML=""
    TongGia.innerHTML="TỔNG BILL: "
     SoBan=x;
  }

  //tên và giá đồ uống

  var foodItem1 = { name: "Cafe Capuchino", price: 30000 };
  var foodItem2 = { name: "Baileys milk coffee", price: 35000 };
  var foodItem3= { name: "Caramel latte", price: 40000 };
  var foodItem4 = { name: "Cepresso", price: 36000 };
  var foodItem5 = { name: "Raspberry mocha", price: 50000 };
  var foodItem6 = { name: "Irish", price: 50000 };
  var foodItem7 = { name: "Frappe", price: 40000 };
  var foodItem8 = { name: "Mocha", price: 90000 };
  

  function addOder(x){
    order.addFoodItem(x);
    var foodNames=[];
    for (var i = 0; i < order.foodItems.length; i++) {
      foodNames.push(order.foodItems[i].name);
    }
   
    Name_Drink.innerHTML= foodNames.join(", ");
    TongGia.innerHTML="TỔNG BILL: "+order.totalPrice+" VNĐ";

    console.log(order.foodItems);

  }

  function remmoveOder(x){
    order.removeFoodItem(x);
    var foodNames=[];
    for (var i = 0; i < order.foodItems.length; i++) {
      foodNames.push(order.foodItems[i].name);
    }
   
    Name_Drink.innerHTML= foodNames.join(", ");
    TongGia.innerHTML="TỔNG BILL: "+order.totalPrice+" VNĐ";


  }

  function goimon(){
    // sendGoal(m,n,p,q);
    var foodNames=[];
    for (var i = 0; i < order.foodItems.length; i++) {
      foodNames.push(order.foodItems[i].name);
    }
   
    foodName= foodNames.join(", ");
    data= SoBan+";"+foodName+";"+order.totalPrice;

        const topic1 = new ROSLIB.Topic({
     ros: ros,
     name: '/my_topic', // Tên của topic trong ROS
     messageType: 'std_msgs/String' // Kiểu dữ liệu của topic
     });

         // Tạo một message và gửi nó xuống topic
    const message = new ROSLIB.Message({
     data  // Dữ liệu bạn muốn gửi
    });
    topic1.publish(message);
   }

   function Khach_xacnhan(){
    



  }



  




 // Connecting to ROS
  // -----------------

  var ros = new ROSLIB.Ros({
   //url : 'ws://192.168.1.10:9090'
    url : 'ws://192.168.1.143:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


  var actionClient = new ROSLIB.ActionClient({
    ros : ros,
    serverName : '/move_base',
    actionName : 'move_base_msgs/MoveBaseAction'
  });

  
  var positionVec3 = new ROSLIB.Vector3(null);
  var orientation = new ROSLIB.Quaternion({x:0, y:0, z:-0.7071, w:0.07071});
  
  positionVec3.x = -1.1174;
  positionVec3.y = 2.0688;

  var pose = new ROSLIB.Pose({
    position : positionVec3,
    orientation : orientation
  });

  var goal = new ROSLIB.Goal({
      actionClient : actionClient,
      goalMessage : {
        target_pose : {
          header : {
            frame_id :'map'
          },
          pose : pose
        }
      }
    });


  /**
   * Send a goal to the navigation stack with the given pose.
   *
   */
  // function sendGoal() {
  //   goal.send();
  // }

  //Khởi tạo tham số vị trí
  var m = 0;
  var n = 0;
  var p = 0;
  var q = 0;

  //Đặt lại giá trị khi nhấn vào bàn
  function ban(a,b,c,d){
    m = a;
    n = b;
    p = c;
    q = d;
  }

  //Khi nhấn vào button gọi món thì gửi toạn độ cần đến 

  // Khi nhấn vào nút xác nhận
  function xacnhan(){
    sendGoal(1,1,1,1);
  }
  



  
  function sendGoal(m,n,p,q) {
    var positionVec3 = new ROSLIB.Vector3(null);
    var orientation = new ROSLIB.Quaternion({x:0, y:0, z:p, w:q});
    
    positionVec3.x = m;
    positionVec3.y = n;

    var pose = new ROSLIB.Pose({
      position : positionVec3,
      orientation : orientation
    });

    var goal = new ROSLIB.Goal({
        actionClient : actionClient,
        goalMessage : {
          target_pose : {
            header : {
              frame_id :'map'
            },
            pose : pose
          }
        }
      });
      goal.send();
  }

  function cancelGoal() {
    // cancel the current goal
    goal.cancel();
  }


  // Monitoring /move_base/result
  var move_baseListener = new ROSLIB.Topic({
    ros : ros,
    name : '/move_base/result',
    messageType : 'move_base_msgs/MoveBaseActionResult'
  });
        

  const buttons = document.querySelectorAll('.custom-btn');

  buttons.forEach(button => {
    let clicked = false;

    button.addEventListener('click', function() {
      if (clicked) {
        this.classList.remove('clicked');
      } else {
        this.classList.add('clicked');
      }
      
      clicked = !clicked;
    });
  });



  // chuong trinh moi
   var text_ban;
   var mang_text_ban=[];
   const topic4 = new ROSLIB.Topic({
    ros: ros,
    name: '/my_topic4',
    messageType: 'std_msgs/String'
    });
         // Đăng ký lắng nghe dữ liệu từ topic
    topic4.subscribe(function(message) {
    text_ban=(message.data).toString();
    mang_text_ban=text_ban.split(",");

    console.log('Nhận dữ liệu từ topic:', message.data);
   })

   move_baseListener.subscribe(function(actionResult) {
    //console.log('Received message on ' + move_baseListener.name + 'status: ' + actionResult.status.status);
    
    if( actionResult.status.status == 3&& mang_text_ban.length!=0){
      alert("ĐỒ ĂN ĐÃ ĐẾN MỜI QUÝ KHÁCH XÁC NHẬN");
    }
    else if(actionResult.status.status == 3 && mang_text_ban.length==0)
      alert("CẢM ƠN QUÝ KHÁCH");
    
    // actionResult.status.status == 2 (goal cancelled)
    // actionResult.status.status == 3 (goal reached)
     //    move_baseListener.unsubscribe();
  });


  
   function sengoal_tong(x){
    switch (x) {
  case 1:
    sendGoal(0.9,2.017,0.7071,-0.7071);
    break;
  case 2:
    sendGoal(2.2227,-0.2534,0.7071,-0.7071)
    break;
  case 3:
    sendGoal(3.4391,2.0294,0.7071,-0.7071)
    break;
  case 4:
    sendGoal(4.4998,-0.1727,0.7071,-0.7071)
    break;
  // Nếu không khớp với bất kỳ trường hợp nào trên, sẽ thực hiện default (nếu có)
  default:
    sendGoal(-1.1174,3.0668,-0.7071,0.7071);
    break;
}
}

function xacnhan_khachhang(){
  if(mang_text_ban.length!=0){
    ban_muc_tieu= parseInt(mang_text_ban.shift());
    sengoal_tong(ban_muc_tieu);
  
  }
  else{
    const topic2 = new ROSLIB.Topic({
      ros: ros,
      name: '/my_topic2', // Tên của topic trong ROS
      messageType: 'std_msgs/String' // Kiểu dữ liệu của topic
      });
    
          // Tạo một message và gửi nó xuống topic
     const message = new ROSLIB.Message({
      data:"Finish"  // Dữ liệu bạn muốn gửi
     });
     topic2.publish(message);
     console.log("da gui");

    sengoal_tong(0);

  }
}

   



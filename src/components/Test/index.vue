<template>
  <div>
    <img src="../../assets/map_demo.png" style="width:130%;">
    <div class="map_bottom">
      <div class="map_bottom_icon">
        <div class="map_bottom_icon-wrap">
          <div class="map_bottom_icon-wrap_item">
            <img src="../../assets/police.png" style="width:40%">
          </div>
          <div>
            <img src="../../assets/bad.png" style="width:30%">
          </div>
        </div>

      </div>
      <div class="map_bottom_icon">
        <img src="../../assets/time_icon.png" style="width:20%;" class="map_button time">
      </div>
    </div>
    <div class="map_bubble map_bubble_bottom" style="display: none;">
      <textarea placeholder="简单描述输入1-20个字"></textarea>
      <div class="btn" style="float:right;">上传图片</div>
      <div class="map_bubble_icon">
      </div>
    </div>
    <div class="map_bubble map_bubble_bottom map_time">
      <select class="map_time_select">
        <option>抢劫事件最近30天</option>
        <option>抢劫事件最近60天</option>
      </select>
      <select class="map_time_select">
        <option>检查事件最近30天</option>
        <option>检查事件最近60天</option>
      </select>
      <div class="btn map_time_btn">提交</div>
      <div class="btn map_time_btn">确定</div>
    </div>
  </div>
</template>

<style type="text/css">

.map_bottom{
  display: table;
  position: fixed;
  bottom: 0;
  padding: 5px 0;
  background-color: #fafafa;
}

.map_bottom .time{
  padding-bottom: 2px;
}
.map_bottom_icon{
  display: table-cell;
  width: 50%;
  text-align: center;
}

.map_bubble{
  position: fixed;
  bottom: 10%;
  background-color: #fafafa;
  width: 50%;
  height: 150px;
  /*line-height: 150px; /* 垂直居中 */*/
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
}

.map_bubble:after{
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 15px solid;
}

.map_bubble img{
  width: 20%;
}

.map_bubble_icon{
  margin-top: 3%;
  float: right;
  text-align: right;
  margin-right: 11%;
}

.map_bottom_icon-wrap{
  display: table;
  width: 100%;
}

.map_bottom_icon-wrap_item{
  display: table-cell;
  width: 50%;
}

.map_bubble_icon img:first-child{
  margin-right: 12%;

}

.map_bubble_bottom:after {
  border-top-color: #fafafa;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  top: 100%;
  left: 50%;
  margin-left: -15px;
}

.map_time{
  right: 0;
  padding-top: 5%;
  height: 130px;
}

.map_time_select{
  border:none;
  line-height: 30px;
  height: 30px;
  width: 100%;
  padding-left: 5%;
}

textarea{
  height: 40%;
  width: 80%;
  margin-top: 6%;
  border:none;
}

.btn{
    height: 10px;
    line-height: 10px;
    border-radius: 0.3rem;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 7px;
    color: #7d7d7d;
    margin-right: 10%;
    margin-top: 3%;
}

.map_time_btn{
  right: 5%;
  margin-right: 0;
  margin-top: 10%;
}
</style>

<script type="text/javascript">
  export default {
    data () {
      return {

      }
    },
    methods: {
      showBlock: function () {

      }
    }
  }
</script>

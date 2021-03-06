import Toast from "react-native-root-toast";

//  工具函数库
const Tools = {
    /*
        格式化日期 返回月日
        @param  {String}  数字格式的日期
        @return  {String} 文本格式日期
        @example 
            (20150507)=> 5月7日
    */
    formatMonthDay(date) {
        let val = String(date);
        if (val.length === 8) {
            return val.substring(4, 6) + "月" + val.substring(6, 8) + "日";
        }
    },
    //  格式化日期 返回星期几 格式同上
    formatWeek(date) {
        let val = String(date);
        if (val.length === 8) {
            let dateStr =val.substring(0, 4) + "/" +val.substring(4, 6) + "/" +val.substring(6, 8);
            let dailyDate = new Date(dateStr);
            let day = dailyDate.getDay();
            let weekAry = new Array( "星期日", "星期一", "星期二", "星期三", "星期四","星期五","星期六");
            return weekAry[day]
        }
    },
    // 获取年月日
    // @return xxxx xx xx
    getDate(){
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
                  : nowDate.getMonth() + 1;
        let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
                  .getDate();
        return year+month+day;
    },
    // 显示提示框
    // @param {String} text 提示
    toast(text) {
       Toast.show(text, {
          position: Toast.positions.BOTTOM,
          shadow: false,
          backgroundColor: "#353434",
          textColor: "#ffffff"
        });
    }

}
export {Tools}

<template>
    <div class="listpage">
        <Header></Header>
        <div class="wrapper-container">
            <div class="button-container" style="margin:0 auto;margin-top:10px;">
                <el-button type="primary" @click="linkto('addproject')" size="mini">New</el-button>
            </div>
            <div class="position-container">
                <div class="table-responsive">
                <table class="table table-hover table-bordered table-condensed" style="table-layout:fixed;">
                    <thead>
                        <tr>
                        <th scope="col">Portfolio Name
                            <el-input v-model="abbnameval" @input.native="searchData('abbname',abbnameval)"></el-input>
                        </th>
                        <th scope="col" style="width:200px;">Portfolio Chinese Name
                            <el-input class="search" v-model="abbnamechival" @input.native="searchData('abbnamechi',abbnamechival)"></el-input>
                        </th>
                        <th scope="col">Company Name
                            <el-input class="search" v-model="fullnameval" @input.native="searchData('fullname',fullnameval)"></el-input>
                        </th>
                        <th scope="col" style="width:200px;">Company Chinese Name
                            <el-input class="search" v-model="fullnamechival" @input.native="searchData('fullnamechi',fullnamechival)"></el-input>
                        </th>
                        <th scope="col">Project Manager
                            <el-select v-model="projectmanagerval"  clearable filterable @change="selectchange('projectmanager', projectmanagerval)">
                            <el-option
                                v-for="item in staffs"
                                :key="item.baseId"
                                :label="item.baseName"
                                :value="item.baseId">
                            </el-option>
                            </el-select>
                        </th>
                        <th scope="col">Portfolio Status
                            <el-select v-model='privatestatusval' clearable @change="selectchange('portfoliostatus', projectmanagerval)">
                            <el-option
                                v-for="item in portfoliostatus"
                                :key="item.baseId"
                                :label="item.baseName"
                                :value="item.baseId">
                            </el-option>
                            </el-select>
                        </th>
                        <th scope="col">Idgonboard Flag
                            <el-select v-model="idgonboardflagval" @change="selectchange('idgonboardflag',idgonboardflagval)"  clearable>
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                        </th>
                        <th scope="col">heldbyspvflag
                            <el-select v-model="heldbyspvflagval" @change="selectchange('heldbyspvflag',heldbyspvflagval)"  clearable>
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-select>
                        </th>
                        <th scope="col">Opt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in alllistData" :key='index'>
                            <td scope="row">{{item.abbname}}</td>
                            <td>{{item.abbnamechi}}</td>
                            <td>{{item.fullname}}</td>
                            <td>{{item.fullnamechi}}</td>
                            <td>{{item.projectmanagerstr}}</td>
                            <td>{{item.portfoliostatusstr}}</td>
                            <td>{{item.idgonboardflag}}</td>
                            <td>{{item.heldbyspvflag}}</td>
                            <td>
                                <i class="el-icon-info" @click="linkto('details',item.portfolioid)"></i>
                                <i @click="linkto('editor',item.portfolioid)" class="el-icon-edit"></i>
                                <i class="el-icon-delete" @click="ifdeletproject(item.portfolioid)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="pagination-container">
                    <el-pagination background layout="prev, pager, next,jumper,total" :total="allcount" :current-page.sync="pageCurrent" @current-change="handleCurrentChange" style="position:absolute;left:50%;bottom:25px;transform: translate(-50%);"></el-pagination>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axioss from "../api/axios";
import Header from "./common/Header";
export default {
  name: "listpage",
  data: function() {
    return {
      portfolioid: "",
      pageCurrent: 1,
      pageCount: 10,
      allcount: 0,
      alllistData:'',
      options: [
        {
          value: true,
          label: "yes"
        },
        {
          value: false,
          label: "no"
        }
      ],
      staffs:'',
      portfoliostatus:'',
      dictArray:'',
      idgonboardflagval: "",
      heldbyspvflagval: "",
      abbnameval: "",
      abbnamechival: "",
      fullnameval: "",
      fullnamechival: "",
      projectmanagerval: "",
      reportnameval: "",
      dictArray: "",
      privatestatusval: ""
    };
  },
  mounted: function() {
    this.submitpage(this.pageCurrent, this.pageCount);
    this.fetchperStatus();
    this.reqMyservice()
  },
  components: {
    Header
  },
  methods: {
    reqMyservice(){
      axioss.reqMyservice().then(res=>{
        console.log(res);
      })
    },
    submitpage: function(pageIndex, pageCount) {
      var that = this;
      var obj = {
        pageIndex: pageIndex,
        pageCount: pageCount,
        abbname: this.abbnameval,
        abbnamechi: this.abbnamechival,
        fullname: this.fullnameval,
        fullnamechi: this.fullnamechival,
        idgonboardflag: this.idgonboardflagval,
        heldbyspvflag: this.heldbyspvflagval,
        projectmanager:this.projectmanagerval,
        portfoliostatus:this.privatestatusval
      };
      axioss
        .reqmemberlist(obj)
        .then(res => {
          that.alllistData = res.data.data;
          this.allcount=res.data.count;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange() {
      this.submitpage(this.pageCurrent, this.pageCount);
    },
    linkto(path, id) {
      if (path == "details") {
        this.$store.dispatch('storedata',id)
        this.$store.dispatch('isDetail',{isDetail:false})
        this.$router.push({ path: "detail", query: { portfolioid: id } });
      } else if (path == "editor") {
        this.$store.dispatch('storedata',id)
        this.$store.dispatch('isDetail',{isDetail:true})
        this.$router.push({ path: "addproject", query:{portfolioid:id,path:'editor'}})
      } else if (path == "addproject") {
        this.$router.push({ path: "addproject",query:{path:'add'}});
      }
    },
    searchData(key, value) {
      var that = this;
      var objsearch = {};
      objsearch[key] = value;
      objsearch.idgonboardflag = this.idgonboardflagval;
      objsearch.heldbyspvflag = this.heldbyspvflagval;
      objsearch.pageIndex = this.pageCurrent;
      objsearch.pageCount = this.pageCount;
      objsearch.abbname = this.abbnameval;
      objsearch.abbnamechi = this.abbnamechival;
      objsearch.fullname = this.fullnameval;
      objsearch.fullnamechi = this.fullnamechival;
      objsearch.projectmanager=this.projectmanagerval,
      objsearch.portfoliostatus=this.privatestatusval
      axioss.reqmemberlist(objsearch)
        .then(res => {
          that.alllistData = res.data.data;
          this.allcount=res.data.count;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectchange(key, value) {
      var that = this;
      var objsearch = {};
      objsearch[key] = value;
      objsearch.pageIndex = this.pageCurrent;
      objsearch.pageCount = this.pageCount;
      objsearch.abbname = this.abbnameval;
      objsearch.abbnamechi = this.abbnamechival;
      objsearch.fullname = this.fullnameval;
      objsearch.fullnamechi = this.fullnamechival;
      objsearch.idgonboardflag = this.idgonboardflagval;
      objsearch.heldbyspvflag = this.heldbyspvflagval;
      objsearch.projectmanager=this.projectmanagerval,
      objsearch.portfoliostatus=this.privatestatusval
      axioss.reqmemberlist(objsearch)
        .then((res) => {
          that.alllistData = res.data.data;
          this.allcount=res.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchperStatus() {
      var that=this;
      axioss.reqdroplist({dictArray:"IDG_Staff,DDL_PortfolioStatus"})
        .then((res)=>{
          this.staffs=res.data.data[0].baseInfoList;
          this.portfoliostatus=res.data.data[1].baseInfoList;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    ifdeletproject(portfolioid) {
      this.$confirm("此Opt将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          axioss.reqdelet(portfolioid).then(res => {
            var status = res.data.code;
            if (status.toLocaleLowerCase() == "success") {
              this.handleCurrentChange();
              this.$message({
                type: "success",
                message: "Delete success!"
              });
            } else {
              this.$message({
                type: "error",
                message: "Delete failure!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Canceled deleting"
          });
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  margin-top: 50px;
}
.el-pagination {
  text-align: center;
  padding: 10px 0;
}
 .table tr th {
  vertical-align: top;
  width:175px;
  text-align:center;
}
.table tr th:last-child {
  width:130px;
}
.table tr td {
  width: 175px;
  white-space: wrap;
  overflow: hidden;
  color:#666;
}
.table tr td:last-child{
    text-align: center;
}
.table tr th,.table tr td{
    border-color:#ddd;
}
.pagination-container{
    width:100%;
    height:50px;

}
.position-container{
    width:95%;margin:0 auto;
    position:relative;
}
.el-button--primary {
  margin: 10px 0;

  background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
}

.el-button--mini {
  width: 48px;
  margin-left: 0;
  margin-right: 5px;
  padding: 7px 12px;
}
.button-container{
    /* border:1px solid #ddd; */
    border-bottom:none;
    width:95%;
}
[class^=el-icon-]{
    margin-left:8px;
}

</style>

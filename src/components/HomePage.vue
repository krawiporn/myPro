<template>
  <div class="row g-0 text-center">
    <div class="col-6 col-md-3">
      <div class="card" style="margin: 20px;">
        <div class="card-body" style="height: 90vh;">
          <h3 style="padding: 30px;">Healthy</h3>
          <div class="subhead">
            <p style="padding: 10px;">ผลตรวจเลือด</p>
            <hr>
            <p style="padding: 10px;">นัดหมาย</p>
            <hr>
            <p style="padding: 10px;">ออกจากระบบ</p>
            <hr>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-9">
      <div class="bd-example-snippet bd-code-snippet">
        <div class="card" style="margin: 20px;">
          <div class="card-header" style="background-color: #B1D8B7; padding: 20px;">
            <nav class="navbar">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input class="form-control me-2 col-md-4" type="search" placeholder="ค้นหา" aria-label="Search">
                <button class="btn" type="submit"  style="background-color: #0A6B3A; color: white;">ค้นหา</button>
              </form>
              <div class="dropdown">
                <button class="btn dropdown-toggle" @click="toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style="border-radius: 20px; background-color: white; color: #0A6B3A;">
                  Dropdown button
                </button>
                <ul class="dropdown-menu" v-if="isActive">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
          
          <div class="card-body" style="text-align: left; padding: 30px;">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ชื่อ - นามสกุล</th>
                  <th scope="col">ประเภทมะเร็ง</th>
                  <th scope="col">วันที่</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>เอ บี</td>
                  <td>ลำไส้ใหญ่</td>
                  <td>03-07-2566</td>
                  <td>
                    <button type="button" class="btn" style="border-radius: 20px; background-color: #0A6B3A; color: white;" @click="goToDetail()">See More</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#" style="color: #0A6B3A;">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#" style="color: #0A6B3A;">1</a></li>
                <li class="page-item"><a class="page-link" href="#" style="color: #0A6B3A;">2</a></li>
                <li class="page-item"><a class="page-link" href="#" style="color: #0A6B3A;">3</a></li>
                <li class="page-item"><a class="page-link" href="#" style="color: #0A6B3A;">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    goToDetail() {
      this.$router.push('/DetailBlood')
    },
    toggle() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.group {
  padding: 20px;
}

.g1 {
  margin-right: 20px;
}


</style>

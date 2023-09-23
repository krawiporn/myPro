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
        <div class="card" style="margin: 20px; width: 65%;">
          <div class="card-body" style="text-align: left;">
            <h5 class="col-sm-3" style="color: #0A6B3A; padding: 20px;"><b>ข้อมูลผู้ป่วย</b></h5>
            <form style="padding-left: 20px;">
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label"><b>ชื่อ - นามสกุล</b></label>
                <label class="col-sm-3 col-form-label">เอ บี</label>
              </div>
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label"><b>เพศ</b></label>
                <label class="col-sm-3 col-form-label">ชาย</label>
              </div>
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label"><b>อายุ</b></label>
                <label class="col-sm-3 col-form-label">34 ปี</label>
              </div>
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label"><b>ประเภทมะเร็ง</b></label>
                <label class="col-sm-3 col-form-label">ผิวหนัง</label>
              </div>
            </form>
          </div>
          <div class="card-body" style="text-align: left;">
            <h5 class="col-sm-3" style="color: #0A6B3A; padding: 20px;"><b>รายงานผล</b></h5>
            <div class="mb-3" style="width: 100%; height: 400px; background-color: aquamarine;">
            </div>
            <label class="col-sm-3 col-form-label" style="padding-top: 20px;"><b>รายงานผล</b></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="รายงานผล"></textarea>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style="margin-top: 20px;">
              <button class="btn btn-primary me-md-2" type="button">บันทึกผล</button>
              <button class="btn btn-danger" type="button">แก้ไข</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
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

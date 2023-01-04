export enum Languages {
  zh = "zh",
  en = "en",
}

export enum PlanTypes {
  EXPRESS,
  PRO,
  ENTERPRISE,
}

export enum BillingTypes {
  ANNUAL,
  MONTHLY,
}

export class PlaneCompareDetailItems {
  constructor(
    public title: string,
    public express: boolean | string = true,
    public pro: boolean | string = true
  ) {}
}

export class PlanCompareFactory {
  constructor(public title: string, public items: PlaneCompareDetailItems[]) {}
}

export const planDetailSections = [
  new PlanCompareFactory("regist", [
    new PlaneCompareDetailItems("registMthod.qrCode"),
    new PlaneCompareDetailItems("registMthod.templateCode"),
    new PlaneCompareDetailItems("registMthod.IMEI"),
    new PlaneCompareDetailItems("registMthod.SN"),
    new PlaneCompareDetailItems("registMthod.BSProvisioner"),
  ]),
  new PlanCompareFactory("geoLocation", [
    new PlaneCompareDetailItems("geoLocations.singleDevice"),
    new PlaneCompareDetailItems("geoLocations.geoLocation"),
    new PlaneCompareDetailItems("geoLocations.locationSyncTime"),
    new PlaneCompareDetailItems("geoLocations.saveLocationHistory"),
    new PlaneCompareDetailItems("geoLocations.geofence"),
  ]),
  new PlanCompareFactory("appManage", [
    new PlaneCompareDetailItems("appManages.install"),
    new PlaneCompareDetailItems("appManages.uninstall"),
    new PlaneCompareDetailItems("appManages.versionManage"),
    new PlaneCompareDetailItems("appManages.mandatoryApp"),
    new PlaneCompareDetailItems("appManages.whiteList"),
    new PlaneCompareDetailItems("appManages.blackList"),
  ]),
  new PlanCompareFactory("remoteDeployAndConfig", [
    new PlaneCompareDetailItems("remoteDeployAndConfigs.customConfigFile"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.kiosk"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.pwdConfig"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.deviceRestrictions"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.wifiConfig"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.wallpaperConfig"),
    new PlaneCompareDetailItems("remoteDeployAndConfigs.remoteCtrl"),
  ]),
  new PlanCompareFactory("fileManage", [
    new PlaneCompareDetailItems("fileManages.fileManage"),
    new PlaneCompareDetailItems("fileManages.storage", "200M", "1GB"),
    new PlaneCompareDetailItems("fileManages.digitalSignage"),
  ]),
  new PlanCompareFactory("browser", [
    new PlaneCompareDetailItems("browsers.android"),
    new PlaneCompareDetailItems("browsers.whiteList"),
    new PlaneCompareDetailItems("browsers.blackList"),
    new PlaneCompareDetailItems("browsers.webContentFilter"),
  ]),
];

import { getRepository } from "typeorm";
import dbFiles from "../../../database/dbFiles.db";
import FollowsEntity from "../../enitities/follows.entity";

class FollowService extends dbFiles {
  private followsReposetory: any;
  constructor() {
    super();
    this.run();
  }

  async createFollow(followInfo: { from: string; to: string; status: string }) {
    try {
      return await this.followsReposetory.save(followInfo);
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  async getFollowers(user_id: string): Promise<number> {
    try {
      return await this.followsReposetory.count({
        where: { to: user_id, status: "active" },
      });
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  async getBlocks(user_id: string): Promise<FollowsEntity[]> {
    try {
      return await this.followsReposetory
        .createQueryBuilder("follows")
        .select()
        .where("follows.from = :from", { from: user_id })
        .andWhere("follows.status = :to", { to: "block" })
        .getMany();
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  async getFollowing(user_id: string): Promise<number> {
    try {
      return await this.followsReposetory.count({
        where: { from: user_id, status: "active" },
      });
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  async checkFollow(from: string, to: string): Promise<number> {
    try {
      return await this.followsReposetory.count({
        where: { from: from, to: to },
      });
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  async getFollow(from: string, to: string): Promise<FollowsEntity> {
    try {
      return await this.followsReposetory
        .createQueryBuilder("follows")
        .select()
        .where("follows.from = :from", { from: from })
        .andWhere("follows.to = :to", { to: to })
        .getOne();
    } catch (err) {
      throw new Error(`Can't get Follow, Try again later`);
    }
  }

  async getFollowStatus(from: string, to: string): Promise<FollowsEntity[]> {
    try {
      const queryBuilder = this.followsReposetory
        .createQueryBuilder("follows")
        .select()
        .where(
          "(follows.from = :from AND follows.to = :to) OR (follows.from = :to AND follows.to = :from)",
          { from: from, to: to }
        );
      return await queryBuilder.getMany();
    } catch (err) {
      // throw new Error(`Can't get Follow, Try again later`);
      throw new Error((err as Error).message);
    }
  }

  async DeleteFollows(
    from: string,
    to: string
  ): Promise<{ raw: []; affected: number }> {
    try {
      const queryBuilder = this.followsReposetory
        .createQueryBuilder("follows")
        .delete()
        .where(
          "(follows.from = :from AND follows.to = :to) OR (follows.from = :to AND follows.to = :from)",
          { from: from, to: to }
        );
      return await queryBuilder.execute();
    } catch (err) {
      // throw new Error(`Can't get Follow, Try again later`);
      throw new Error((err as Error).message);
    }
  }

  async deleteFollow(from: string, to: string) {
    try {
      const deleteResult = await this.followsReposetory
        .createQueryBuilder()
        .delete()
        .where("to = :to", { to })
        .andWhere("from = :from", { from: from })
        .execute();

      return deleteResult;
    } catch (err) {
      throw new Error(`Can't create Follow, Try again later`);
    }
  }

  private run() {
    this.initializeDatabase();
    this.followsReposetory = getRepository(FollowsEntity);
  }
}

export default FollowService;
